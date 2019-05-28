import { Injectable } from '@angular/core';
import * as Mongoose from 'mongoose';

@Injectable({
  providedIn: 'root'
})
export class MongooseService {
  private connector: Mongoose;

  constructor() {}

  public setConnector(ip: string, port: string, database: string): Mongoose {
    this.connector = Mongoose.connect(`mongodb://${ip}${port}/${database}`, {
      useNewUrlParser: true
    });
    return this.connector;
  }

  public getConnector(): Mongoose {
    return this.connector;
  }
}
