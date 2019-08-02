import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowlsComponent } from './growls.component';

describe('GrowlsComponent', () => {
  let component: GrowlsComponent;
  let fixture: ComponentFixture<GrowlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrowlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
