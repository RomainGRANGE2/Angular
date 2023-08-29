import { Injectable } from '@angular/core';
import { CRUDTaskService } from './crudtask.service';
import { Observable } from 'rxjs';
import { Task } from '../models/Task';

@Injectable()
export class TaskFacadeService {
  constructor(private crudtask: CRUDTaskService) {}

  getListTask(): Observable<Task[]> {
    return this.crudtask.getListTask();
  }
}
