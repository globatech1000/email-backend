// src/email/email.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  async sendEmail(@Body() body: { from:string; to: string;  subject: string; text: string }) {
    const { to, from, subject, text } = body;
    await this.emailService.sendEmail(from, to, subject, text);
  
  }
}
