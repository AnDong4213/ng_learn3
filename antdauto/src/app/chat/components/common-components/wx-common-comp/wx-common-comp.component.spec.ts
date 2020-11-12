/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WxCommonCompComponent } from './wx-common-comp.component';

describe('WxCommonCompComponent', () => {
  let component: WxCommonCompComponent;
  let fixture: ComponentFixture<WxCommonCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WxCommonCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WxCommonCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
