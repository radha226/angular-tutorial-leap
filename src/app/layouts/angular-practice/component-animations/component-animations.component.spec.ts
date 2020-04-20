import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAnimationsComponent } from './component-animations.component';

describe('ComponentAnimationsComponent', () => {
  let component: ComponentAnimationsComponent;
  let fixture: ComponentFixture<ComponentAnimationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentAnimationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
