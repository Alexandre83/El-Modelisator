import { Injectable } from '@angular/core';
import { DB, deleteDb, openDb, Transaction } from 'idb';

@Injectable({
  providedIn: 'root',
})
export class IndexDBService {
  protected DB_NAME = 'offline';

  async open(db: string): Promise<DB> {
    return openDb(db, 1, upgradeDB => {
      upgradeDB.createObjectStore('projects');
    });
  }

  async transaction(
    db: string,
    storeName: string,
    mode: 'readonly' | 'readwrite' = 'readwrite',
  ): Promise<Transaction> {
    const store = await this.open(db);
    return store.transaction(storeName, mode);
  }

  async set(storeName: string, value: any, key): Promise<void[]> {
    if (key) {
      const tx = await this.transaction(this.DB_NAME, storeName);
      tx.objectStore(storeName).put(value, key);
      const txOffline = await this.transaction(this.DB_NAME, storeName);
      txOffline.objectStore(storeName).put(value, key);
      const promises = [
        txOffline.complete,
        tx.complete,
      ];

      return Promise.all(promises);
    }
  }

  async setAll(storeName: string, rows: any[], key: any = 'id'): Promise<void[]> {
    const store = await this.open(this.DB_NAME);
    const promises = rows.map(row => {
      const tx = store.transaction(storeName, 'readwrite');
      tx.objectStore(storeName).put(row, row[key]);
      return tx.complete;
    });
    return Promise.all(promises);
  }

  async get(storeName: string, key: any): Promise<any> {
    const tx = await this.transaction(this.DB_NAME, storeName);
    return tx.objectStore(storeName).get(key);
  }

  async getAll(storeName: string): Promise<any[]> {
    const tx = await this.transaction(this.DB_NAME, storeName);
    return tx.objectStore(storeName).getAll();
  }

  async clear(db: string, storeName: string): Promise<void> {
    const tx = await this.transaction(db, storeName);
    return tx.objectStore(storeName).clear();
  }

  async delete(storeName: string, value: any, key): Promise<void[]> {
    const txOffline = await this.transaction(this.DB_NAME, storeName);
    txOffline.objectStore(storeName).delete(key);

    const tx = await this.transaction(this.DB_NAME, storeName);
    tx.objectStore(storeName).put(value, key);

    const promises = [
      txOffline.complete,
      tx.complete,
    ];

    return Promise.all(promises);
  }

  deleteDB(db: string) {
    return deleteDb(db);
  }
}
