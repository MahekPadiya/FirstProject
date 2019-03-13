import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaveroomComponent } from './haveroom.component';

describe('HaveroomComponent', () => {
  let component: HaveroomComponent;
  let fixture: ComponentFixture<HaveroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaveroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaveroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
