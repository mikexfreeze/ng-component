import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TnTableV1Component } from './tn-table-v1.component';

describe('TnTableV1Component', () => {
  let component: TnTableV1Component;
  let fixture: ComponentFixture<TnTableV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TnTableV1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TnTableV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
