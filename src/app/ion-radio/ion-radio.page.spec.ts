import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonRadioPage } from './ion-radio.page';

describe('IonRadioPage', () => {
  let component: IonRadioPage;
  let fixture: ComponentFixture<IonRadioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonRadioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonRadioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
