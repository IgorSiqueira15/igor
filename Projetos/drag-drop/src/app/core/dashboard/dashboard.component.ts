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

  itemArrastado = null;

  constructor(private coreService: CoreService,
    protected modal: NgbModal) { }

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

  onModalItem() {
    const modal = this.modal.open(ModalComponent, { size: 'lg' });
    modal.result.then(confirmado => {
    });
  }


}
