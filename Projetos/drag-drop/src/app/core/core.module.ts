import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DragDropModule } from 'primeng/dragdrop';
import {PanelModule} from 'primeng/panel';
import { CoreService } from './core.service';
import { HttpClientModule } from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {NgbModule, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    DragDropModule,
    PanelModule,
    HttpClientModule,
    NgbModule,
    ButtonModule
  ],
  exports:[
    DragDropModule,
    PanelModule,
  ],
  providers:[
    CoreService,
    NgbActiveModal
  ]
})
export class CoreModule { }
