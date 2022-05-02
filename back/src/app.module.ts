import { Module } from '@nestjs/common';
import { SchemeFormModule } from './api-scheme-form/scheme-form.module';

@Module({
  imports: [SchemeFormModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
