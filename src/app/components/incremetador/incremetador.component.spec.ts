/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IncremetadorComponent } from './incremetador.component';

describe('IncremetadorComponent', () => {
  let component: IncremetadorComponent;
  let fixture: ComponentFixture<IncremetadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncremetadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncremetadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
