import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavanaPage } from './savana.page';

describe('SavanaPage', () => {
  let component: SavanaPage;
  let fixture: ComponentFixture<SavanaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavanaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavanaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
