import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { FieldTypeEnum } from '../../../_models/enums/field-type.enum';

@Component({
    selector: 'el-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ListComponent),
            multi: true,
        },
    ],
})
export class ListComponent implements OnInit, ControlValueAccessor {
    @Input() nestedIndex: number;

    obj: object;
    collapsed = false;
    fieldTypes = FieldTypeEnum;

    constructor() { }

    ngOnInit() { }

    isObject(type: any): boolean {
        if (typeof type === 'object') {
            return true;
        } else {
            return false;
        }
    }

    writeValue(obj: any) {
        this.obj = obj;
        this.propagateChange(obj);
    }

    registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any) { }

    protected propagateChange = (_: any) => {
    };

    valueChange(value, field) {
        this.obj[field.key] = value;
        this.propagateChange(this.obj);
    }

    changeKey(field, value) {
        if (value !== field) {
            this.obj[value] = this.obj[field];
            delete this.obj[field];
            this.propagateChange(this.obj);
        }
    }

    changeType(field, value) {
        if (value !== 'object') {
            this.obj[field.key] = value;
            this.propagateChange(this.obj);
        }
    }

    get ObjKeyLength() {
        if (this.obj) {
            return Object.keys(this.obj).length;
        } else {
            return 0;
        }
    }

    get fieldTypesKey() {
        return Object.keys(FieldTypeEnum);
    }

    addField() {
        this.obj['field_name'] = 'string';
    }

    removeField(field: string) {
        delete this.obj[field];
    }
}
