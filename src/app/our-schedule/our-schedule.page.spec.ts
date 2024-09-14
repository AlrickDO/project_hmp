import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OurSchedulePage } from './our-schedule.page';

describe('OurSchedulePage', () => {
  let component: OurSchedulePage;
  let fixture: ComponentFixture<OurSchedulePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OurSchedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
