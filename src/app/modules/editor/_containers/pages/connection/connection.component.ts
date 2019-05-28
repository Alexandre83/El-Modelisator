import { MongooseService } from './../../../../../core/services/mongoose.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'el-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {
  connectionInfos: {
    ip: string;
    port: string;
    db: string;
  };

  constructor(private mongooserService: MongooseService) {}

  ngOnInit() {}

  tryConnect(): void {
    this.mongooserService.setConnector('192.168.99.100', '32776', 'admin');
  }
}
