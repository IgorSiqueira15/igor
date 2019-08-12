import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable()
export class AppComponentService {
  constructor(private http: HttpClient) {}

  postJson() {}
}
