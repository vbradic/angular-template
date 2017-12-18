import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleUpComponent } from './middle-up.component';

describe('MiddleUpComponent', () => {
  let component: MiddleUpComponent;
  let fixture: ComponentFixture<MiddleUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
