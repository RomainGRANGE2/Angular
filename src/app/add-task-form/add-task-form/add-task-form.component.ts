import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss'],
})
export class AddTaskFormComponent {
  myForm!: FormGroup;

  ngOnInit() {
    this.myForm = new FormGroup({
      titre: new FormControl(null),
      description: new FormControl(null),
      date: new FormControl(null),
      etat: new FormControl(null),
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}
