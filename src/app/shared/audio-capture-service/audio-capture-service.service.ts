import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket'

@Injectable({
  providedIn: 'root'
})
export class AudioCaptureService {

  private socket$: WebSocketSubject<any> = webSocket("ws://localhost:8765/");
  private transcribedTextSubject!: Subject<any>;
  private currSelection: FormControl | undefined;
  private isControlSelected: boolean = false;

  constructor() {
    this.socket$.subscribe((message) => {
      if (message.data) {
        this.transcribedTextSubject.next(message);
      }
    });
  }

  startAudioCapture() {
    console.log('Sending message "start" to the server')
    try {
      this.transcribedTextSubject = new Subject();
      this.socket$.next({ message: 'start' });
    } catch (error) {
      console.error(error);
    }
  }

  stopAudioCapture() {
    console.log('Sending message "stop" to the server')
    try {
      this.socket$.next({ message: 'stop' });
      console.log('Audio capture stopped!');

    } catch (error) {
      console.error(error);
    }
  }

  getTranscriptionSubject(): Observable<any> {
    return this.transcribedTextSubject.asObservable();
  }

  setCurrentControlSelection(control: any) {
    if (control instanceof FormControl) {
      this.currSelection = control;
      this.isControlSelected = true;
    }
    else {
      this.currSelection = undefined;
      this.isControlSelected = false;
    }
  }

  setCurrentControlSelectionValue(data: string) {
    console.log('Setting the value in selected FormControl...')
    if (this.isControlSelected && this.currSelection != undefined) {
      this.currSelection.setValue(data);
      console.log('Value set successfully!')
    }
    else {
      console.log('No FormControl Selected!')
    }
  }


}
