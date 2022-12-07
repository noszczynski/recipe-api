import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello!';
  }

  @Get('/user')
  getSample() {
    return { name: 'Adam' };
  }

  @Post('/user')
  createUser(@Body() user: { name: string }) {
    return { user };
  }

  @Delete('/user/:id')
  removeUser(@Param() id: string) {
    return {};
  }
}
