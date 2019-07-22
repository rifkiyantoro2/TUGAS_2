import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KawahPage } from './kawah.page';

describe('KawahPage', () => {
  let component: KawahPage;
  let fixture: ComponentFixture<KawahPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KawahPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KawahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
