import Axios from 'axios';
import { IPostFormDto, IPostFormDtoResponse } from './dto/postForm.dto';

export const postForm = (data: IPostFormDto) => Axios
  .post('http://localhost:3001/scheme-form', data)
  .then((res) => res.data as IPostFormDtoResponse);
