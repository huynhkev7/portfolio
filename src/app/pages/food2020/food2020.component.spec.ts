import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Food2020Component } from './food2020.component';

describe('Food2020Component', () => {
  let component: Food2020Component;
  let fixture: ComponentFixture<Food2020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Food2020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Food2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
