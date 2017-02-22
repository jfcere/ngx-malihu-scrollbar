/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MalihuScrollbarDemoComponent } from './malihu-scrollbar-demo.component';

describe('MalihuScrollbarDemoComponent', () => {
  let component: MalihuScrollbarDemoComponent;
  let fixture: ComponentFixture<MalihuScrollbarDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalihuScrollbarDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalihuScrollbarDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});