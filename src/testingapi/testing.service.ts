import { Injectable } from '@nestjs/common';
import { requestDto } from '../dto/request.dto';
import createConnection from './db/dbtest/dbconfig';

@Injectable()
export class testingService {
  async testing(request: requestDto): Promise<any> {
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
      return returnToFront;
    } else {
      return 'Пустой запрос';
    }
  }
}
