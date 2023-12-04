import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksAdminRoutingModule } from './tasks-admin-routing.module';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../material/material.module';
import { ConfitmationComponent } from './components/confitmation/confitmation.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ListTasksComponent,
    AddTaskComponent,
    ConfitmationComponent
  ],
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    TasksAdminRoutingModule,
    NgxPaginationModule,
    SharedModule
  ]
})
export class TasksAdminModule { }