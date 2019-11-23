import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintrainingComponent } from './admintraining.component';

describe('AdmintrainingComponent', () => {
  let component: AdmintrainingComponent;
  let fixture: ComponentFixture<AdmintrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmintrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmintrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
