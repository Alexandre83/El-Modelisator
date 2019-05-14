import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'el-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  constructor() {}
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

  static itemResize(item, itemComponent): void {}

  static itemChange(item, itemComponent): void {}

  ngOnInit() {
    this.options = {
      itemChangeCallback: GridComponent.itemChange,
      itemResizeCallback: GridComponent.itemResize,
      minCols: 35,
      maxCols: 35,
      minRows: 20,
      maxRows: 20,
      margin: 0
    };

    this.dashboard = [
      { cols: 4, rows: 4, y: 7, x: 15 },
      { cols: 1, rows: 1, y: 1, x: 0, resizeEnabled: true, dragEnabled: true }
    ];
  }

  changedOptions() {
    this.options.api.optionsChanged();
  }

  removeItem(item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }
}
