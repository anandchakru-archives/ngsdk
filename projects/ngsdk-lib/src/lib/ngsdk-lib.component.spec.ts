import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgsdkLibComponent } from './ngsdk-lib.component';

describe('NgsdkLibComponent', () => {
  let component: NgsdkLibComponent;
  let fixture: ComponentFixture<NgsdkLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgsdkLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgsdkLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
