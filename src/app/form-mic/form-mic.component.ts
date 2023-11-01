import { Component, OnInit } from '@angular/core';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { AudioCaptureService } from '../shared/audio-capture-service/audio-capture-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-mic',
  templateUrl: './form-mic.component.html',
  styleUrls: ['./form-mic.component.css']
})
export class FormMicComponent implements OnInit {

  isAudioCapturing: boolean = false;
  faMicrophone = faMicrophone;
  subscription!: Subscription;
  transcribedText: string = '';

  constructor(private audioCaptureService: AudioCaptureService) { }

  ngOnInit() { }

  toggleAudioCapture() {
    this.isAudioCapturing = !this.isAudioCapturing;

    if (this.isAudioCapturing) {
      this.transcribedText = '';
      this.audioCaptureService.startAudioCapture();

      this.subscription = this.audioCaptureService.getTranscriptionSubject().subscribe(response => {
        this.transcribedText += ' ' + response.data;
        console.log(response);
      });

    }
    else {
      this.audioCaptureService.stopAudioCapture();
      this.subscription.unsubscribe();
      this.audioCaptureService.setCurrentControlSelectionValue(this.transcribedText);
      this.audioCaptureService.setCurrentControlSelection(undefined)
    }

    console.log('Audio capturing status ==> ' + (this.isAudioCapturing ? 'started' : 'stopped'));
  }
}
