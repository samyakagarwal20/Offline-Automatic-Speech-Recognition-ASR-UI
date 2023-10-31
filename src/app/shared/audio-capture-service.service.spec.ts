import { TestBed } from '@angular/core/testing';

import { AudioCaptureServiceService } from './audio-capture-service.service';

describe('AudioCaptureServiceService', () => {
  let service: AudioCaptureServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioCaptureServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
