import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MicButtonComponent } from './mic-button/mic-button.component';
import { RformComponent } from './rform/rform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormMicComponent } from './form-mic/form-mic.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InternetConnectionStatusComponent } from './internet-connection-status/internet-connection-status.component';

@NgModule({
  declarations: [
    AppComponent,
    MicButtonComponent,
    RformComponent,
    FormMicComponent,
    InternetConnectionStatusComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
