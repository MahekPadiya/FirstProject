import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookingroomComponent } from './lookingroom.component';

describe('LookingroomComponent', () => {
  let component: LookingroomComponent;
  let fixture: ComponentFixture<LookingroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookingroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookingroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
