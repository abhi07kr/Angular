import { TestBed } from '@angular/core/testing';

import { AssignmentServService } from './assignment-serv.service';

describe('AssignmentServService', () => {
  let service: AssignmentServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignmentServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
