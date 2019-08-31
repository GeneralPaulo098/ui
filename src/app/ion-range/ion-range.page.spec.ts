import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonRangePage } from './ion-range.page';

describe('IonRangePage', () => {
  let component: IonRangePage;
  let fixture: ComponentFixture<IonRangePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonRangePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonRangePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
