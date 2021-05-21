import { Injectable } from '@nestjs/common';
import { requestDto } from '../dto/request.dto';
import createConnection from './db/dbtest/dbconfig';
import { distance } from 'fastest-levenshtein';
import { RegstandartDto } from '../dto/regstandart.dto';
import { InjectRepository } from '@nestjs/typeorm';
/*import { Task } from '../entities/tasks.entity';*/
import { Repository } from 'typeorm';
/*import _, { map } from 'underscore';*/

@Injectable()
export class testingService {
  constructor(
    /*@InjectRepository(Task)
    private taskRepository: Repository<Task>,*/
  ) {}
  async getEqPercent(request: RegstandartDto): Promise<any> {
    // определяет процентное соотношение рекомендованного написания к отправленному ответу
    const requestFromUser = request.request;
    const standartReqFromUser = request.standart;
    const dist = distance(
      requestFromUser.toLowerCase(),
      standartReqFromUser.toLowerCase(),
    ); // количество отличий
    const proportion =
      dist / ((requestFromUser.length + standartReqFromUser.length) / 2); // доля различия
    return 100 - proportion * 100;
  }
  async getRes(request: requestDto): Promise<any> {
    // набор данных полученный после выполнения пользовательского запроса
    let returnToFront;
    const requestFromUser = request.request;
    if (requestFromUser !== '') {
      await createConnection
        .then(async (connection) => {
          await connection.manager
            .query(requestFromUser)
            .then((response) => {
              returnToFront = response;
            })
            .catch((error) => {
              returnToFront = error;
            });
        })
        .catch((error) => {
          returnToFront = error;
        });
      return { ...returnToFront };
    } else {
      return 'Пустой запрос';
    }
  }
  // response => data object (response.data)
  /*async answer(task: Task, response: any): Promise<any> {
    const oneTask = await this.taskRepository.findOne(task.id);
    // массив полей респонса
    const setOfFieldsR = _.keys(response);
    // количество значений респонса
    const setOfValuesR = _.values(response).length;
    // массив полей правильного ответа
    const setOfFieldsA = _.keys(JSON.parse(oneTask.answer));
    // количество значений правильного ответа
    const setOfValuesA = _.values(JSON.parse(oneTask.answer)).length;
    // проверка на правильный ответ и процент сходства
    if (_.isEqual(JSON.parse(oneTask.answer), response)) {
      // проверить с разным количеством строк ответа
      return 'абсолютно верно';
    } else {
      // количество совпадающих полей правильного ответа и response
      const countEqField = _.intersection(setOfFieldsR, setOfFieldsA).length;
      // соотношение совпадающих полей
      const percentFields = countEqField / setOfFieldsA.length;
      // соотношение совпадающих значений
      const percentValues = setOfValuesR / setOfValuesA;
      // процентное совпадение с ответом
      return ((percentFields + percentValues) / 2) * 100;
    }
  }*/
}
