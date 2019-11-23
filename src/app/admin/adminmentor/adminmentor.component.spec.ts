import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmentorComponent } from './adminmentor.component';

describe('AdminmentorComponent', () => {
  let component: AdminmentorComponent;
  let fixture: ComponentFixture<AdminmentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminmentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
