import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyParentModuleComponent } from './body-parent-module.component';

describe('BodyParentModuleComponent', () => {
  let component: BodyParentModuleComponent;
  let fixture: ComponentFixture<BodyParentModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyParentModuleComponent]
    });
    fixture = TestBed.createComponent(BodyParentModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
