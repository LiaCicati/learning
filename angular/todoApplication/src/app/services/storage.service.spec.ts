import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    // TestBed.configureTestingModule({});
    // service = TestBed.inject(StorageService);
    service = new StorageService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
