import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BentogetherComponent } from './bentogether.component';

describe('BentogetherComponent', () => {
  let component: BentogetherComponent;
  let fixture: ComponentFixture<BentogetherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BentogetherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BentogetherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
