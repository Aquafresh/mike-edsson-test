export class GetLayoutDto {
  header: ILayoutRows;
  actions: ILayoutRows;
}

export class ILayoutRows {
  rows: ILayoutColumns[];
}

export class ILayoutColumns {
  columns: ILayoutField[];
}

export class ILayoutField {
  [index: string]: string;
}
