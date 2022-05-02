import Axios from 'axios';
import { ILayout } from '../slices/layout.interface';

export const getLayout = () => Axios
  .get('http://localhost:3001/scheme-layout')
  .then((res) => res.data as ILayout);
