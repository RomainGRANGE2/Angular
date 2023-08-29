import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTaskComponent } from './main-task/main-task.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'maintask',
    pathMatch: 'full',
  },
  {
    path: 'maintask',
    component: MainTaskComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
