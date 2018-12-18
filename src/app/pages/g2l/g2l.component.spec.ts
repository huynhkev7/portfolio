import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { G2lComponent } from './g2l.component';

describe('G2lComponent', () => {
  let component: G2lComponent;
  let fixture: ComponentFixture<G2lComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ G2lComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(G2lComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
