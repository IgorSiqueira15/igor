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

  itemsSelecionados: Dashboard[];

  itemArrastado: Dashboard;

  constructor(private coreService: CoreService) { }

  ngOnInit() {
    this.coreService.findAll().then(item => this.items = item);
  }

  dragStart(event,item: Dashboard) {
    this.itemArrastado = item ;
}
dragEnd(event) {
  this.itemArrastado = null;
}

findIndex(item: Dashboard) {
  let index = -1;
  for(let i = 0; i < this.items.length; i++) {
      if(item.id === this.items[i].id) {
          index = i;
          break;
      }
  }
  return index;
}

drop(event) {
  if(this.itemArrastado) {
      let itemArrastadoIndex = this.findIndex(this.itemArrastado);
      this.itemsSelecionados = [...this.itemsSelecionados, this.itemArrastado];
      this.items = this.items.filter((val,i) => i!=itemArrastadoIndex);
      this.itemArrastado = null;
  }
}

}
