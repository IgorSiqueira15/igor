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


  itemArrastado: Dashboard;

  constructor(private coreService: CoreService) { }

  ngOnInit() {
    this.coreService.findAll().then(item => this.items = item);
  }

  dragStart(event,item: Dashboard) {
    this.itemArrastado = item ;
}

}
