export interface ILayout {
  header: ILayoutRows;
  actions: ILayoutRows
}

export interface ILayoutRows {
  rows: ILayoutColumns[];
}

export interface ILayoutColumns {
  columns: ILayoutField[];
}

export interface ILayoutField {
  [index: string]: string;
}
