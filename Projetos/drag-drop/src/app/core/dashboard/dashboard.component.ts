import { Component, OnInit } from '@angular/core';
import { Dashboard } from './dashboard';
import { CoreService } from '../core.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  items: Dashboard[];

  dropped = [];

  itemArrastado = null;

  constructor(private coreService: CoreService) { }

  ngOnInit() {
    this.coreService.findAll().then(item => this.items = item);
  }

  dragStart(event, item: Dashboard) {
    this.itemArrastado = item;
  }
  dragEnd(event) {
  }

  drop(event) {
    if(this.itemArrastado){
      this.dropped.push(this.itemArrastado);
      this.itemArrastado = null;
    }
  }

  // onModalItem() {
  //   const modal = this.modal.open(AutorModalListComponent, { size: 'lg' });
  //   modal.result.then(confirmado => {
  //     this.onListar();
  //   });
  // }


}
