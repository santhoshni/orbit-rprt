import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrbitLstComponent } from './orbit-lst.component';

describe('OrbitLstComponent', () => {
  let component: OrbitLstComponent;
  let fixture: ComponentFixture<OrbitLstComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrbitLstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrbitLstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
