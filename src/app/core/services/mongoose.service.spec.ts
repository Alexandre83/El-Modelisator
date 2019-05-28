import { TestBed } from '@angular/core/testing';

import { MongooseService } from './mongoose.service';

describe('MongooseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MongooseService = TestBed.get(MongooseService);
    expect(service).toBeTruthy();
  });
});
