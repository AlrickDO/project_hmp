import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamMembersPage } from './team-members.page';

describe('TeamMembersPage', () => {
  let component: TeamMembersPage;
  let fixture: ComponentFixture<TeamMembersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMembersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
