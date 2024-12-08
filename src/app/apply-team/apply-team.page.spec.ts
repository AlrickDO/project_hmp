import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplyTeamPage } from './apply-team.page';

describe('ApplyTeamPage', () => {
  let component: ApplyTeamPage;
  let fixture: ComponentFixture<ApplyTeamPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyTeamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
