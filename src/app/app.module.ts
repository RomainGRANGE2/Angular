import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { TaskModule } from './task/task.module';
import { HttpClientModule } from '@angular/common/http';
import { AddTaskFormModule } from './add-task-form/add-task-form.module';

@NgModule({
  declarations: [AppComponent, HelloWorldComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TaskModule,
    HttpClientModule,
    AddTaskFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
