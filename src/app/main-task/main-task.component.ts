import { Component } from '@angular/core';
import { Task } from '../models/Task';
import { State } from '../state';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.scss'],
})
export class MainTaskComponent {
  task: Array<Task> = new Array<Task>();

  constructor() {
    this.task.push({
      titre: 'Dormir',
      description: 'Bonbons',
      date: '2023-06-05',
      etat: State.EN_COURS,
    });

    this.task.push({
      titre: 'Dormir',
      description: 'Ordinateur',
      date: '2021-04-12',
      etat: State.EN_COURS,
    });
  }
}
9