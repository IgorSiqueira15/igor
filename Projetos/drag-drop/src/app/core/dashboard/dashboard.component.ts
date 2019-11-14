import { Component, OnInit } from '@angular/core';
import { Dashboard } from './dashboard';
import { CoreService } from '../core.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/modal/modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items: Dashboard[];

  dropped = [];

  fazer = [];
  desenvolvendo = [];
  testando = [];
  feito = [];

  itemArrastado = null;

  constructor(private coreService: CoreService, protected modal: NgbModal) {}

  ngOnInit() {
    this.coreService.findAll().then(item => (this.items = item));
  }

  dragStart(event, item: Dashboard) {
    this.itemArrastado = item;
  }
  dragEnd(event) {}

  drop(event) {
    console.log(this.items);

    if (this.itemArrastado) {
      switch (
        document.getElementsByTagName('p-panel')[1].getAttribute('header')
      ) {
        case 'Desenvolvimento':
          this.desenvolvendo.push(this.itemArrastado);
          this.items.splice(this.items.indexOf(this.itemArrastado), 1);
          this.itemArrastado = null;
          break;
        case 'Testando':
          this.testando.push(this.itemArrastado);
          this.itemArrastado = null;
          break;
        case 'Feito':
          this.feito.push(this.itemArrastado);
          this.itemArrastado = null;
          break;
      }
    }
  }

  onModalItem() {
    const modal = this.modal.open(ModalComponent, { size: 'lg' });
    modal.result.then(confirmado => {});
  }
}
