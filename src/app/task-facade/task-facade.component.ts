import { Component } from '@angular/core';
import { Task } from '../models/Task';
import { TaskFacadeService } from '../services/task-facade.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-facade',
  templateUrl: './task-facade.component.html',
  styleUrls: ['./task-facade.component.scss'],
})
export class TaskFacadeComponent {
  tasklist: Observable<Task[]> = new Observable<Task[]>();
  constructor(private taskFacadeService: TaskFacadeService) {}
  ngOnInit() {
    this.tasklist = this.taskFacadeService.getListTask();
  }
}
