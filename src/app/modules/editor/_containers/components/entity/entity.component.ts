import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'el-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss']
})
export class EntityComponent implements OnInit {
  @Input()
  title: string;

  constructor() {}

  ngOnInit() {}
}
