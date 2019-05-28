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
    const connection = this.mongooserService.setConnector(
      '192.168.99.100',
      '32776',
      'admin'
    );
    connection.on('open', function() {
      // connection established
      new Admin(connection.db).listDatabases(function(err, result) {
        console.log('listDatabases succeeded');
        // database list stored in result.databases
        const allDatabases = result.databases;
      });
    });
  }
}
