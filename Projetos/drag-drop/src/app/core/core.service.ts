import { HttpClient } from '@angular/common/http';
import { Dashboard } from './dashboard/dashboard';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<any>('assets/dashboard.json')
      .toPromise()
      .then(res => <Dashboard[]>res.data)
      .then(data => { return data; });
    }
}
