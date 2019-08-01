import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClogComponent } from './clog.component';

describe('ClogComponent', () => {
  let component: ClogComponent;
  let fixture: ComponentFixture<ClogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
