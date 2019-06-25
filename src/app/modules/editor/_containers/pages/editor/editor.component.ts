import { Component, OnInit, ViewChild } from '@angular/core';
import { Timestamp } from 'bson';
import * as _ from 'lodash';
import { JsonEditorOptions, JsonEditorComponent } from 'ang-jsoneditor';

type FieldsType =
  | 'string'
  | 'number'
  | 'boolean'
  | SchemaType
  | 'Date'
  | 'Timestamp';
interface SchemaType {
  [key: string]: FieldsType;
}

@Component({
  selector: 'el-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  @ViewChild(JsonEditorComponent) editor: JsonEditorComponent;

  public editorOptions: JsonEditorOptions;
  fields: SchemaType;

  constructor() {
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.modes = ['tree', 'view'];
  }

  ngOnInit() {
    this.fields = {
      testA: 'string',
      testB: {
        testAB: 'number',
        testBB: {
          testAAB: 'number'
        }
      },
      testC: 'Date'
    };
  }

  public addField(name: string, type: SchemaType) {
    this.fields[name] = type;
  }

  deletePropertyPath(...args: string[]) {
    this.fields = _.omit(this.fields, args);
  }

  displaySchema(): string {
    return JSON.stringify(this.fields, undefined, 4);
  }
}
