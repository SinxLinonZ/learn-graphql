import { Controller, Get, Param, Query, Redirect } from '@nestjs/common';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {
  constructor(private readonly appService: HelloService) {}

  @Get('')
  getHello(@Query('name') name: string): { message: string } {
    return this.appService.getHello(name);
  }

  @Get('nihao')
  @Redirect('/hello?name=nihao', 302)
  getNihao() {
    return;
  }

  @Get(':name')
  getHelloName(@Param('name') name: string): string {
    return `Hello ${name}`;
  }
}
