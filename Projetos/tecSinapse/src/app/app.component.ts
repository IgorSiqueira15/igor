import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tecSinapse';
  result: any;
  urlToJson = 'assets/recrutamento.json';

  constructor(public http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>(this.urlToJson).subscribe(response => {
      this.result = response;

      this.teste();

      this.verificarMes();
    });
  }

  verificarMes() {
    for (let i = 0; i <= this.result; i++) {}
  }

  teste() {
    console.log(this.result);
  }
}
