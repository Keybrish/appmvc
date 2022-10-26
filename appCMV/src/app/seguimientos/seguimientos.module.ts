import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguimientosRoutingModule } from './seguimientos-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';


@NgModule({
  declarations: [
    PageListComponent
  ],
  imports: [
    CommonModule,
    SeguimientosRoutingModule
  ]
})
export class SeguimientosModule { }
