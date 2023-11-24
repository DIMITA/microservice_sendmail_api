import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { createTransport } from 'nodemailer';

export const NodeMailerToken = Symbol('nodemailer');

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'mailhog',
        port: 1025,
        ignoreTLS: true,
      },
      defaults: {
        from: '"No Reply" <noreply@ynov.com>',
      },
    }),
  ],
  providers: [
    MailService,
    {
      provide: NodeMailerToken,
      useFactory: () =>
        createTransport({
          host: 'localhost',
          port: 1025,
          secure: true,
        }),
    },
  ],
  exports: [MailService],
})
export class MailModule {}
