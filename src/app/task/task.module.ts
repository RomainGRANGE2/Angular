import { Component, NgModule } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { TaskComponent } from './task.component';
import { MainTaskComponent } from '../main-task/main-task.component';
import { FormatDatePipe } from '../format-date.pipe';
import { RouterModule } from '@angular/router';
import { CRUDTaskService } from '../services/crudtask.service';
import { TaskFacadeComponent } from '../task-facade/task-facade.component';
import { TaskFacadeService } from '../services/task-facade.service';
import { HttpTestService } from '../services/http-test.service';

@NgModule({
  declarations: [
    TaskComponent,
    MainTaskComponent,
    FormatDatePipe,
    TaskFacadeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'display', component: TaskComponent },
      { path: 'facade', component: TaskFacadeComponent },
    ]),
  ],
  providers: [CRUDTaskService, TaskFacadeService, HttpTestService],
})
export class TaskModule {}
