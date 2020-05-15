import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptLogicComponent } from './javascript-logic.component';

describe('JavascriptLogicComponent', () => {
  let component: JavascriptLogicComponent;
  let fixture: ComponentFixture<JavascriptLogicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavascriptLogicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
