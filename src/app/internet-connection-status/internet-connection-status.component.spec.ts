import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetConnectionStatusComponent } from './internet-connection-status.component';

describe('InternetConnectionStatusComponent', () => {
  let component: InternetConnectionStatusComponent;
  let fixture: ComponentFixture<InternetConnectionStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InternetConnectionStatusComponent]
    });
    fixture = TestBed.createComponent(InternetConnectionStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
