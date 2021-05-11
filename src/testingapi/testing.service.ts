import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';
import { requestDto } from '../dto/request.dto';

@Injectable()
export class testingService {
  async testing(request: requestDto): Promise<any> {
    const manager = getManager();
    const requestFromUser = request.request;
    if (requestFromUser !== '') {
      // проверка на пустую строку
      return await manager
        .query(requestFromUser)
        .then(function (response) {
          return response;
        })
        .catch(function (error) {
          return error;
        });
    } else {
      return 'Пустой запрос';
    }
  }
}
