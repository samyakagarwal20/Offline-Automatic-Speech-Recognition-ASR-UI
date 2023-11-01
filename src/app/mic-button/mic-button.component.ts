import { Component, OnInit } from '@angular/core';
import { AudioCaptureService } from '../shared/audio-capture-service/audio-capture-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mic-button',
  templateUrl: './mic-button.component.html',
  styleUrls: ['./mic-button.component.css']
})
export class MicButtonComponent {

  private subscription!: Subscription;
  is_capturing: boolean = false;
  showStatus: boolean = false;
  statusMessage: string = '';
  transcribedText: string = '';
  activeSuffix: string = ' ...';

  constructor(private audioCaptureService: AudioCaptureService) { }

  onMicButtonClick() {
    console.log('displayText : ' + this.showStatus)
    this.showStatus = !this.showStatus;

    // if (this.showStatus) {
    //   console.log("Starting audio capture");
    //   this.statusMessage = 'Checking device status...';

    //   this.audioCaptureService.startAudioCapture();

    //   setTimeout(() => {
    //     this.statusMessage = 'Capturing audio...';
    //     this.activeSuffix = ' ...'

    //     this.subscription = this.audioCaptureService.getTranscriptionSubject().subscribe(response => {
    //       this.transcribedText += ' ' + response.data;
    //       console.log("Transcribed text from observable");
    //       console.log(response);
    //     });
    //   }, 500);

    // }
    // else {
    //   console.log("Stopping audio capture");
    //   this.audioCaptureService.stopAudioCapture();

    //   this.subscription.unsubscribe();

    //   setTimeout(() => {
    //     this.statusMessage = 'Stopping audio capture...';
    //     setTimeout(() => {
    //       this.statusMessage = '';
    //       this.activeSuffix = '';
    //     });
    //   }, 500);
    //   this.statusMessage = ''
    // }

  }
}
