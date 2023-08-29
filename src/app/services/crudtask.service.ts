import { Injectable } from '@angular/core';
import { Task } from '../models/Task';
import { State } from '../state';
import { of } from 'rxjs';

@Injectable()
export class CRUDTaskService {
  constructor() { }

  getListTask() {
    let task: Array<Task> = new Array<Task>();
    task.push({
      titre: 'Dormir',
      description: 'Bonbons',
      date: '2023-06-05',
      etat: State.EN_COURS,
    });

    task.push({
      titre: 'Dormir',
      description: 'Ordinateur',
      date: '2021-04-12',
      etat: State.EN_COURS,
    });
    return of(task);
  }

  deleteTask() { }
}
