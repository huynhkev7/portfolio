import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IxpComponent } from './ixp.component';

describe('IxpComponent', () => {
  let component: IxpComponent;
  let fixture: ComponentFixture<IxpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IxpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IxpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
