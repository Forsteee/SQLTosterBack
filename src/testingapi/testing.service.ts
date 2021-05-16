import { Injectable } from '@nestjs/common';
import { requestDto } from '../dto/request.dto';
import createConnection from './db/dbtest/dbconfig';
import { distance } from 'fastest-levenshtein';
import { RegstandartDto } from '../dto/regstandart.dto';

@Injectable()
export class testingService {
  async getEqPercent(request: RegstandartDto): Promise<any> {
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
}
