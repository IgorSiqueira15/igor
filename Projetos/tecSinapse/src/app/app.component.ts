import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from './produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tecSinapse';
  result: any;
  urlToJson = 'assets/recrutamento.json';

  produto1: Produto[] = [];
  produto2: Produto[] = [];
  produto3: Produto[] = [];
  produto4: Produto[] = [];
  produto5: Produto[] = [];

  desembro1: Produto[] = [];
  desembro2: Produto[] = [];
  desembro3: Produto[] = [];
  desembro4: Produto[] = [];
  desembro5: Produto[] = [];

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
    // console.log(this.result);
    // this.separaItens(this.result);
    this.separaProdutoMes(this.result);
  }

  separaItens(produtos: Produto[]) {
    produtos.forEach(produto => {
      if (produto.item == 'item 1') {
        this.produto1.push(produto);
      }
      if (produto.item == 'item 2') {
        this.produto2.push(produto);
      }
      if (produto.item == 'item 3') {
        this.produto3.push(produto);
      }
      if (produto.item == 'item 4') {
        this.produto4.push(produto);
      }
      if (produto.item == 'item 5') {
        this.produto5.push(produto);
      }
    });

    console.log(this.produto1);
    console.log(this.produto2);
    console.log(this.produto3);
    console.log(this.produto4);
    console.log(this.produto5);
  }

  separaProdutoMes(produtos: Produto[]) {
    produtos.forEach(produto => {
      if (
        produto.item == 'item 1' &&
        produto.dia.charAt(3) == '1' &&
        produto.dia.charAt(4) == '2'
      ) {
        this.desembro1.push(produto);
      }
      if (
        produto.item == 'item 2' &&
        produto.dia.charAt(3) == '1' &&
        produto.dia.charAt(4) == '2'
      ) {
        this.desembro2.push(produto);
      }
      if (
        produto.item == 'item 3' &&
        produto.dia.charAt(3) == '1' &&
        produto.dia.charAt(4) == '2'
      ) {
        this.desembro3.push(produto);
      }
      if (
        produto.item == 'item 4' &&
        produto.dia.charAt(3) == '1' &&
        produto.dia.charAt(4) == '2'
      ) {
        this.desembro4.push(produto);
      }
      if (
        produto.item == 'item 5' &&
        produto.dia.charAt(3) == '1' &&
        produto.dia.charAt(4) == '2'
      ) {
        this.desembro5.push(produto);
      }
    });
    console.log(this.desembro1);
    // console.log(this.desembro2);
    // console.log(this.desembro3);
    // console.log(this.desembro4);
    // console.log(this.desembro5);
    this.veificaQuantidadeItens(this.desembro1);
  }

  veificaQuantidadeItens(produtos: Produto[]) {
    let quantidadeTotal = 0;
    let valorTotal = 0;
    produtos.forEach(produto => {
      quantidadeTotal += produto.quantidade;
      valorTotal += produto.total;
    });

    console.log('Pronduto 1:');
    console.log('Quantidade: ', quantidadeTotal);
    console.log('ValorTotal: ', valorTotal);
  }
}
