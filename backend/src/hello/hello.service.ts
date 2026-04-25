import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  // getHello(): string {
  //   return 'Hello World!';
  // }
  getHello(name: string): { message: string } {
    return {
      message: 'Hello ' + name,
    };
  }
}
