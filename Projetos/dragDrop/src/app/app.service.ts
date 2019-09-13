import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http
      .get<any>('assets/data/taskData.json')
      .toPromise()
      .then(res => <Task[]>res.data)
      .then(data => {
        return data;
      });
  }
}
