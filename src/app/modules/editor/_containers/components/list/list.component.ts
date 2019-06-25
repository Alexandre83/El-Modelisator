import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'el-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() obj: object;
  @Input() nestedIndex: number;

  fieldTypes = [
    { value: 'string', label: 'String' },
    { value: 'number', label: 'Number' },
    { value: 'boolean', label: 'Boolean' },
    { value: 'Date', label: 'Date' },
    { value: 'Timestamp', label: 'Timestamp' }
  ];

  constructor() {}

  ngOnInit() {}

  isObject(type: any): boolean {
    if (typeof type === 'object') {
      return true;
    } else {
      return false;
    }
  }
}
