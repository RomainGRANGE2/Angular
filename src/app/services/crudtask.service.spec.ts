import { TestBed } from '@angular/core/testing';

import { CRUDTaskService } from './crudtask.service';

describe('CRUDTaskService', () => {
  let service: CRUDTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CRUDTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
