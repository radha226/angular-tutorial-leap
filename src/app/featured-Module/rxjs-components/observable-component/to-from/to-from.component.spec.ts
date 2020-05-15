import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToFromComponent } from './to-from.component';

describe('ToFromComponent', () => {
  let component: ToFromComponent;
  let fixture: ComponentFixture<ToFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
