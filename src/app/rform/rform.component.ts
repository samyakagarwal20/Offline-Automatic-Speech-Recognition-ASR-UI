import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AudioCaptureService } from '../shared/audio-capture-service/audio-capture-service.service';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent {

  loginForm: FormGroup;
  currSelection!: FormControl;

  constructor(private audioCaptureService: AudioCaptureService) {
    this.loginForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      sufferingFrom: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
  }

  onTextboxClick(controlKey: string) {
    const control = this.loginForm.get(controlKey)
    if (control) {
      this.audioCaptureService.setCurrentControlSelection(control as FormControl);
    }
  }

  onSubmit() {
  }

}
