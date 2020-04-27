import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsComponentsComponent } from './rxjs-components.component';

describe('RxjsComponentsComponent', () => {
  let component: RxjsComponentsComponent;
  let fixture: ComponentFixture<RxjsComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
