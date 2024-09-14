import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WhatWePlayPage } from './what-we-play.page';

describe('WhatWePlayPage', () => {
  let component: WhatWePlayPage;
  let fixture: ComponentFixture<WhatWePlayPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatWePlayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
