export class GetSchemeFormDto {
  schema: IFields;
}

export class IFields {
  fields: IField[];
}

export class IField {
  id: string;
  label: string;
  name: string;
  type: string;
  maxLength?: number;
}
