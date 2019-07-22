import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelagaPage } from './telaga.page';

describe('TelagaPage', () => {
  let component: TelagaPage;
  let fixture: ComponentFixture<TelagaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelagaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelagaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
