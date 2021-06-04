import { Injectable } from '@nestjs/common';
import { requestDto } from '../dto/request.dto';
import createConnection from './db/dbtest/dbconfig';
import { distance } from 'fastest-levenshtein';
import { RegstandartDto } from '../dto/regstandart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../entities/tasks.entity';
import { Repository } from 'typeorm';
import _, { map } from 'underscore';
import { responseDto } from '../dto/response.dto';

@Injectable()
export class testingService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}
  getEqPercent(requestFromUser: string, standartReqFromUser: string): number {
    // определяет процентное соотношение рекомендованного написания к отправленному ответу
    /*const requestFromUser = request.request;
    const standartReqFromUser = request.standart;*/
    const dist = distance(
      requestFromUser.toLowerCase().trim().replace(/\r?\n/g, ''),
      standartReqFromUser.toLowerCase().trim().replace(/\r?\n/g, ''),
    ); // количество отличий
    const proportion =
      dist / ((requestFromUser.length + standartReqFromUser.length) / 2); // доля различия
    return 100 - proportion * 100;
  }
  async getRes(request: requestDto): Promise<any> {
    // набор данных полученный после выполнения пользовательского запроса
    let returnToFront = new responseDto(); // {data: [],EqPercent: number,answer: number}
    const requestFromUser = request.request;
    if (requestFromUser !== '') {
      await createConnection
        .then(async (connection) => {
          await connection.manager
            .query(requestFromUser)
            .then(async (response) => {
              //returnToFront = response;
              returnToFront.response = response;
              returnToFront.eqPercent = this.getEqPercent(
                request.request,
                request.standart,
              );
              returnToFront.answerPercent = await this.answer(
                request.task,
                response,
              );
            })
            .catch((error) => {
              returnToFront = error;
            });
        })
        .catch((error) => {
          returnToFront = error;
        });
      return returnToFront;
    } else {
      return 'Пустой запрос';
    }
  }
  async answer(task: Task, response: any): Promise<number> {
    const oneTask = await this.taskRepository.findOne(task.id);
    // массив полей респонса
    const setOfFieldsR = _.keys(response[0]);
    // количество значений респонса
    const setOfValuesR = _.values(response).length;
    // массив полей правильного ответа
    const setOfFieldsA = _.keys(oneTask.answer[0]);
    // количество значений правильного ответа
    const setOfValuesA = _.values(oneTask.answer).length;
    // проверка на правильный ответ и процент сходства
    // количество совпадающих полей правильного ответа и response
    const countEqField = _.intersection(setOfFieldsR, setOfFieldsA).length;
    // соотношение совпадающих полей
    const percentFields = countEqField / setOfFieldsA.length;
    // соотношение совпадающих значений
    const percentValues =
      1 -
      Math.abs(
        (setOfValuesR - setOfValuesA) / ((setOfValuesR + setOfValuesA) / 2),
      );
    // процентное совпадение с ответом
    return ((percentFields + percentValues) / 2) * 100;
  }
}
