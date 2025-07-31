import { Injectable } from '@nestjs/common';

@Injectable()
export class PublicService {
  getHello() {
    return { data: 'Hello World!' };
  }
}
