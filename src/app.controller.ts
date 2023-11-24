import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { MailService } from './mail/mail.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private mailservice: MailService,
  ) {}

  @MessagePattern('notifications')
  getNotifications(@Payload() data: any, @Ctx() context: RmqContext) {
    console.log(`Pattern: ${context.getPattern()}`);
    console.log(`Message: ${context.getMessage()}`);
    console.log(`data: ${data}`);
    this.mailservice.sendUserConfirmation(JSON.parse(data));
  }
}
