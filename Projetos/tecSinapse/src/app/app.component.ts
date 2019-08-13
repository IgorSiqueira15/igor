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
  urlToJson = 'https://eventsync.portaltecsinapse.com.br/public/recrutamento/input?email=igorbertoldo2011@hotmail.com';

  produto: Produto;

  produto1: Produto[] = [];
  produto2: Produto[] = [];
  produto3: Produto[] = [];
  produto4: Produto[] = [];
  produto5: Produto[] = [];

  dezembro1: Produto[] = [];
  dezembro2: Produto[] = [];
  dezembro3: Produto[] = [];
  dezembro4: Produto[] = [];
  dezembro5: Produto[] = [];

  teste: number;

  constructor(public http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>(this.urlToJson).subscribe(response => {
      this.result = response;

      this.printConsole();
    });

    // var ajax = new XMLHttpRequest();

    // // Seta tipo de requisição: Post e a URL da API
    // ajax.open(
    //   'POST',
    //   'https://eventsync.portaltecsinapse.com.br/public/recrutamento/finalizar?email=igorbertoldo2011@hotmail.com',
    //   true
    // );
    // ajax.setRequestHeader('Content-type', 'text/plain');

    // // Seta paramêtros da requisição e envia a requisição
    // ajax.send('');

    // // Cria um evento para receber o retorno.
    // ajax.onreadystatechange = function() {
    //   // Caso o state seja 4 e o http.status for 200, é porque a requisição deu certo.
    //   if (ajax.readyState == 4 && ajax.status == 200) {
    //     var data = ajax.responseText;

    //     // Retorno do Ajax
    //     console.log(data);
    //   }
    // };
  }

  printConsole() {
    console.log('Todos os itens: ', this.result);

    console.log('Ordenando o JSON por item: ');
    this.separaItens(this.result);

    console.log('Filtrando os produtos do mês de dezembro de 2018: ');
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
      if (produto.item == 'item 1' && produto.dia.charAt(3) == '1' && produto.dia.charAt(4) == '2') {
        this.dezembro1.push(produto);
      }
      if (produto.item == 'item 2' && produto.dia.charAt(3) == '1' && produto.dia.charAt(4) == '2') {
        this.dezembro2.push(produto);
      }
      if (produto.item == 'item 3' && produto.dia.charAt(3) == '1' && produto.dia.charAt(4) == '2') {
        this.dezembro3.push(produto);
      }
      if (produto.item == 'item 4' && produto.dia.charAt(3) == '1' && produto.dia.charAt(4) == '2') {
        this.dezembro4.push(produto);
      }
      if (produto.item == 'item 5' && produto.dia.charAt(3) == '1' && produto.dia.charAt(4) == '2') {
        this.dezembro5.push(produto);
      }
    });
    console.log(this.dezembro1);
    console.log(this.dezembro2);
    console.log(this.dezembro3);
    console.log(this.dezembro4);
    console.log(this.dezembro5);

    console.log('Soma de quantidade e valor total vendido: ');
    this.verificaQuantidadeItem1(this.dezembro1);
    this.verificaQuantidadeItem2(this.dezembro2);
    this.verificaQuantidadeItem3(this.dezembro3);
    this.verificaQuantidadeItem4(this.dezembro4);
    this.verificaQuantidadeItem5(this.dezembro5);
  }
  verificaQuantidadeItem1(produtos: Produto[]) {
    let quantidadeTotal = 0;
    let valorTotal = 0;
    produtos.forEach(produto => {
      quantidadeTotal += produto.quantidade;
      valorTotal += produto.total;
    });

    console.log('Produto 1:');
    console.log('Quantidade: ', quantidadeTotal);
    console.log('ValorTotal: ', Math.round(valorTotal * 100) / 100);
  }
  verificaQuantidadeItem2(produtos: Produto[]) {
    let quantidadeTotal = 0;
    let valorTotal = 0;
    produtos.forEach(produto => {
      quantidadeTotal += produto.quantidade;
      valorTotal += produto.total;
    });

    console.log('Produto 2:');
    console.log('Quantidade: ', quantidadeTotal);
    console.log('ValorTotal: ', Math.round(valorTotal * 100) / 100);
  }
  verificaQuantidadeItem3(produtos: Produto[]) {
    let quantidadeTotal = 0;
    let valorTotal = 0;
    produtos.forEach(produto => {
      quantidadeTotal += produto.quantidade;
      valorTotal += produto.total;
    });

    console.log('Produto 3:');
    console.log('Quantidade: ', quantidadeTotal);
    console.log('ValorTotal: ', Math.round(valorTotal * 100) / 100);
  }
  verificaQuantidadeItem4(produtos: Produto[]) {
    let quantidadeTotal = 0;
    let valorTotal = 0;
    produtos.forEach(produto => {
      quantidadeTotal += produto.quantidade;
      valorTotal += produto.total;
    });

    console.log('Produto 4:');
    console.log('Quantidade: ', quantidadeTotal);
    console.log('ValorTotal: ', Math.round(valorTotal * 100) / 100);
  }
  verificaQuantidadeItem5(produtos: Produto[]) {
    let quantidadeTotal = 0;
    let valorTotal = 0;
    produtos.forEach(produto => {
      quantidadeTotal += produto.quantidade;
      valorTotal += produto.total;
    });

    console.log('Produto 5:');
    console.log('Quantidade: ', quantidadeTotal);
    console.log('ValorTotal: ', Math.round(valorTotal * 100) / 100);
  }
}
