import { ConstraintTypeEnum } from './enums/constraint-type.enum';
import { Field } from './field.model';

export interface Constraint {
  name: string;
  from: Field;
  to: Field;
  type: ConstraintTypeEnum;
}
