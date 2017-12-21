import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleDownComponent } from './middle-down.component';

describe('MiddleDownComponent', () => {
  let component: MiddleDownComponent;
  let fixture: ComponentFixture<MiddleDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
