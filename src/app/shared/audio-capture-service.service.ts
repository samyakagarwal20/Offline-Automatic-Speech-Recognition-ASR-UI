import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket'

@Injectable({
  providedIn: 'root'
})
export class AudioCaptureService {

  private socket$: WebSocketSubject<any> = webSocket("ws://localhost:8765/");
  private transcribedTextSubject: Subject<any> = new Subject<string>();

  constructor() {
    this.socket$.subscribe((message) => {
      if(message.data) {
        this.transcribedTextSubject.next(message);
      }
    });
    console.log(this.socket$);

  }

  startAudioCapture() {
    console.log('Sending message "start" to the server')
    try {
      this.socket$.next({ message: 'start' });
    } catch (error) {
      console.error(error);
    }
  }

  stopAudioCapture() {
    console.log('Sending message "stop" to the server')
    try {
      this.socket$.next({ message: 'stop' });
    } catch (error) {
      console.error(error);
    }
  }
  getTranscribedText(): Observable<any> {
    return this.transcribedTextSubject.asObservable();
  }

}
