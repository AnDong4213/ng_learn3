/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WxAuComponent } from './wx-au.component';

describe('WxAuComponent', () => {
  let component: WxAuComponent;
  let fixture: ComponentFixture<WxAuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WxAuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WxAuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
