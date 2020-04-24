import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class HortifruitService {
  getData(page: number, limit: number): any {
    throw new Error("Method not implemented.");
  }
  dataSrc: number[] = Array.from(Array(1000).keys());
  etData(page, limit) {
    return new Promise((resolve, reject) => {
      let start = (page - 1) * limit;
      let offset = start + limit;
      let resp = {
        data: this.dataSrc.slice(start, offset),
        totalItems: this.dataSrc.length
      }
      resolve(resp);
    });
  }
  constructor() { }
}
