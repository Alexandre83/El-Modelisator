import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

import { Collection } from '../../../_models/collection.model';
import { Project } from '../../../_models/project.model';

@Component({
    selector: 'el-collection-form',
    templateUrl: './collection-form.component.html',
    styleUrls: ['./collection-form.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CollectionFormComponent),
            multi: true,
        },
    ],
})
export class CollectionFormComponent implements OnInit, ControlValueAccessor {
    @Input() type: string;

    public project: Project;
    public collection: Collection;
    public collectionForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.collectionForm = this.formBuilder.group({
            name: ['', Validators.required]
        });
    }

    writeValue(value: any) {
        if (value) {
            if (this.type === 'update') {
                this.collection = value;
                this.collectionForm.get('name').setValue(this.collection.name);
                this.propagateChange(this.collection);
            } else {
                this.project = value;
                this.propagateChange(this.project);
            }
        }

    }

    registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any) { }

    protected propagateChange = (_: any) => { }

    onSubmit() {
        if (this.type === 'update') {
            this.collection.name = this.collectionForm.get('name').value;
            this.propagateChange(this.collection);
        } else {
            this.project.collections.push({
                name: this.collectionForm.get('name').value,
                fields: {}
            });
            this.propagateChange(this.project);
            this.collectionForm.reset();
        }
    }
}
