import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandiPage } from './candi.page';

describe('CandiPage', () => {
  let component: CandiPage;
  let fixture: ComponentFixture<CandiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
