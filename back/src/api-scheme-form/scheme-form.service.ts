import { Injectable } from '@nestjs/common';
import * as schemeForm from './scheme.json';
import * as layout from './layoutScheme.json';
import { PostFormDto } from './dto/post-form.dto';

@Injectable()
export class SchemeFormService {
  getSchemeForm() {
    return schemeForm;
  }

  getLayout() {
    return layout;
  }

  postProducts(data: PostFormDto) {
    return {
      status: 200,
      message: 'Document saved',
    };
  }
}
