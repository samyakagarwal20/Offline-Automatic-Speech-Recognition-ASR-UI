import { Component, OnInit } from '@angular/core';
import { ConnectivityService } from '../shared/connectivity-service/connectivity.service';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
// import { faCircle } from '@fortawesome/free-regular-svg-icons';
// import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-internet-connection-status',
  templateUrl: './internet-connection-status.component.html',
  styleUrls: ['./internet-connection-status.component.css']
})
export class InternetConnectionStatusComponent implements OnInit {
  isOnline!: boolean;
  faCircle = faCircle

  constructor(private connectivityService: ConnectivityService) { }

  ngOnInit() {
    this.isOnline = this.connectivityService.isOnline.value;
    this.connectivityService.isOnline.subscribe(isOnline => {
      this.isOnline = isOnline;
    });
  }
}
