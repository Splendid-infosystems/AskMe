import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDescriptionComponent } from './doctor-description.component';

describe('DoctorDescriptionComponent', () => {
  let component: DoctorDescriptionComponent;
  let fixture: ComponentFixture<DoctorDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorDescriptionComponent]
    });
    fixture = TestBed.createComponent(DoctorDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
