import { Constraint } from './constraint.model';
import { Field } from './field.model';

export interface Entity {
  name: string;
  collection: string;
  fields: Field[];
  constraints: Constraint[];
}
