import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptArrayComponent } from './javascript-array.component';

describe('JavascriptArrayComponent', () => {
  let component: JavascriptArrayComponent;
  let fixture: ComponentFixture<JavascriptArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavascriptArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
