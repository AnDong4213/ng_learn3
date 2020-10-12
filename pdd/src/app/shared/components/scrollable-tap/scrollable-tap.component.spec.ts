import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollableTapComponent } from './scrollable-tap.component';

describe('ScrollableTapComponent', () => {
  let component: ScrollableTapComponent;
  let fixture: ComponentFixture<ScrollableTapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollableTapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollableTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
