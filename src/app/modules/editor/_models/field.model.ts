import { FieldTypeEnum } from './enums/field-type.enum';

export interface Field {
  [name: string]: FieldTypeEnum;
}
