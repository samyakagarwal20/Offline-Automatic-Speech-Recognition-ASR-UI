import { TestBed } from '@angular/core/testing';
import { AudioCaptureService } from './audio-capture-service.service';

describe('AudioCaptureServiceService', () => {
  let service: AudioCaptureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioCaptureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
