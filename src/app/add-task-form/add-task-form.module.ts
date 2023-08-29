import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AddTaskFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: 'form', component: AddTaskFormComponent }]),
  ],
})
export class AddTaskFormModule {}
