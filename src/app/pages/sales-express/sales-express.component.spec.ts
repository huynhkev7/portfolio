import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesExpressComponent } from './sales-express.component';

describe('SalesExpressComponent', () => {
  let component: SalesExpressComponent;
  let fixture: ComponentFixture<SalesExpressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesExpressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesExpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
