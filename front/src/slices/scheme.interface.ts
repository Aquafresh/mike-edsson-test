export interface IScheme {
  schema: IFields;
}

export interface IFields {
  fields: IField[];
}

export interface IField {
  id: string;
  label: string;
  name: string;
  type: string;
  maxLength?: number;
}
