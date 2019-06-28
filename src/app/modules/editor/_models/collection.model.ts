import { Constraint } from './constraint.model';
import { FieldTypeEnum } from './enums/field-type.enum';

export interface Collection {
    name: string;
    fields: {
        [name: string]: FieldTypeEnum | any;
    };
    constraints?: Constraint[];
}
