import { ElementRef, Renderer } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { MalihuScrollbarDirective } from './malihu-scrollbar.directive';

xdescribe('MalihuScrollbarDirective:unit', () => {
  const mockElementRef = new ElementRef({ elementRef: true });

  let mScrollbarDirective: MalihuScrollbarDirective;
  let renderer: Renderer;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Renderer],
    });
  });

  beforeEach(() => {
    renderer = TestBed.get(Renderer);
    mScrollbarDirective = new MalihuScrollbarDirective(mockElementRef, renderer);
  });

  it('should create an instance', () => {
    expect(mScrollbarDirective).toBeTruthy();
  });
});
