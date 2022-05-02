import { Module } from '@nestjs/common';
import { SchemeFormController } from './scheme-form.controller';
import { SchemeFormService } from './scheme-form.service';

@Module({
  imports: [],
  controllers: [SchemeFormController],
  providers: [SchemeFormService],
})
export class SchemeFormModule {}
