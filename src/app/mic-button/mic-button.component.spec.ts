import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicButtonComponent } from './mic-button.component';

describe('MicButtonComponent', () => {
  let component: MicButtonComponent;
  let fixture: ComponentFixture<MicButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MicButtonComponent]
    });
    fixture = TestBed.createComponent(MicButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
