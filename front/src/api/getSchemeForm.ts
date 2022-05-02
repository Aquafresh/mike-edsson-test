import Axios from 'axios';
import { IScheme } from '../slices/scheme.interface';

export const getSchemeForm = () => Axios
  .get('http://localhost:3001/scheme-form')
  .then((res) => res.data as IScheme);
