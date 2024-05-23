import { TestBed } from '@angular/core/testing';

import { DropdownOptionsService } from './dropdown-options.service';

describe('DropdownOptionsService', () => {
  let service: DropdownOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropdownOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
