import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { DashbourdRoutingModule } from './dashbourd-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    DashbourdRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class DashbourdModule { }
