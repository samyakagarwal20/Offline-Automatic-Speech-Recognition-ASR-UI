import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMicComponent } from './form-mic.component';

describe('FormMicComponent', () => {
  let component: FormMicComponent;
  let fixture: ComponentFixture<FormMicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormMicComponent]
    });
    fixture = TestBed.createComponent(FormMicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
