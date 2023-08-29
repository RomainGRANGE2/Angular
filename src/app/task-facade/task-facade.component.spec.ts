import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFacadeComponent } from './task-facade.component';

describe('TaskFacadeComponent', () => {
  let component: TaskFacadeComponent;
  let fixture: ComponentFixture<TaskFacadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskFacadeComponent]
    });
    fixture = TestBed.createComponent(TaskFacadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
