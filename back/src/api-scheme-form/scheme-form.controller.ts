import { Controller, Get, Post, Body, UsePipes } from '@nestjs/common';
import { SchemeFormService } from './scheme-form.service';
import { GetSchemeFormDto } from './dto/get-schemeForm.dto';
import { GetLayoutDto } from './dto/get-layout.dto';
import { PostFormDataResponse, PostFormDto } from './dto/post-form.dto';

import { CustomValidationPipe } from './validate-pipe';

@Controller()
export class SchemeFormController {
  constructor(private readonly schemeFormService: SchemeFormService) {}

  @Get('/scheme-form')
  getSchemeForm(): GetSchemeFormDto {
    return this.schemeFormService.getSchemeForm();
  }

  @Get('/scheme-layout')
  getLayout(): GetLayoutDto {
    return this.schemeFormService.getLayout();
  }

  @Post('/scheme-form')
  @UsePipes(new CustomValidationPipe())
  postSchemeForm(@Body() dto: PostFormDto): PostFormDataResponse {
    return this.schemeFormService.postProducts(dto);
  }
}
