import { BadRequestException, HttpException, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    try {
      throw new BadRequestException('This is a bad request exception');
    } catch (error) {
      throw new HttpException(error, undefined);
    }
  }
}
