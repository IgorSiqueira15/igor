import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropModule } from 'primeng/dragdrop';
import { PanelModule } from 'primeng/panel';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DragDropModule,
    AppRoutingModule,
    PanelModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    TableModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
