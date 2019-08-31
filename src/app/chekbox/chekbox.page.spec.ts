import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChekboxPage } from './chekbox.page';

describe('ChekboxPage', () => {
  let component: ChekboxPage;
  let fixture: ComponentFixture<ChekboxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChekboxPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChekboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
