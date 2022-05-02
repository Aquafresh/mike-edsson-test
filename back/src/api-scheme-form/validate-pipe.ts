import { ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { Injectable, PipeTransform } from '@nestjs/common';
import * as schemeForm from './scheme.json';
import { PostFormDto } from './dto/post-form.dto';
import { IField } from './dto/get-schemeForm.dto';

@Injectable()
export class CustomValidationPipe implements PipeTransform {
  transform(payload: PostFormDto, metadata: ArgumentMetadata) {
    const validation = (values: PostFormDto) => {
      const IDs = Object.keys(values);

      const result = schemeForm.schema.fields.every((item: IField) => {
        const included = IDs.includes(item.id);
        if (included) {
          if (item.maxLength) return values[item.id].length < item.maxLength;
          if (item.type === 'number') {
            return typeof +values[item.id] === 'number';
          }

          return true;
        }

        return false;
      });
      return result;
    };

    if (!validation(payload)) {
      throw new BadRequestException('Invalid Input Data');
    } else {
      return payload;
    }
  }
}
