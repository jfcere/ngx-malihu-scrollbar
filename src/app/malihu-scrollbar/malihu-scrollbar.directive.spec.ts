import { ElementRef, NgZone } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { MalihuScrollbarDirective } from './malihu-scrollbar.directive';

describe('MalihuScrollbarDirective:unit', () => {
  const mockElementRef = new ElementRef({ elementRef: true, nativeElement: 'native-element-x' });

  let mScrollbarDirective: MalihuScrollbarDirective;
  let zone: NgZone;

  beforeEach(() => {
    zone = TestBed.get(NgZone);
    mScrollbarDirective = new MalihuScrollbarDirective(mockElementRef, zone);
  });

  describe('ngAfterViewInit', () => {
    const callOrder = [];

    beforeEach(() => {
      spyOn(mScrollbarDirective, 'initElements').and.callFake(() => callOrder.push('initElements'));
      spyOn(mScrollbarDirective, 'initScrollbar').and.callFake(() => callOrder.push('initScrollbar'));
    });

    it('should call init methods correctly', () => {

      mScrollbarDirective.ngAfterViewInit();

      expect(callOrder.length).toBe(2);
      expect(callOrder[0]).toBe('initElements');
      expect(callOrder[1]).toBe('initScrollbar');
    });
  });

  describe('ngOnDestroy', () => {

    it('should call destroyScrollbar correctly', () => {

      spyOn(mScrollbarDirective, 'destroyScrollbar');

      mScrollbarDirective.ngOnDestroy();

      expect(mScrollbarDirective.destroyScrollbar).toHaveBeenCalled();
    });
  });

  describe('initElements', () => {

    it('should set scrollableElement according to scrollElementId when provided', () => {

      const scrollElementId = 'scroll-element-id-x';
      const mockJQueryElement = <JQuery>{ length: 1 };

      spyOn(window as any, '$').and.callFake(selector => {
        return selector === `#${scrollElementId}`
          ? mockJQueryElement
          : null;
      });

      mScrollbarDirective.scrollElementId = scrollElementId;
      mScrollbarDirective.initElements();

      expect(mScrollbarDirective.scrollableElement).toBe(mockJQueryElement);
    });

    it('should set scrollableElement to applied directive element when scrollELementId is not provided', () => {

      const mockJQueryElement = <JQuery>{ length: 1 };

      spyOn(window as any, '$').and.callFake(selector => {
        return selector === mockElementRef.nativeElement
          ? mockJQueryElement
          : null;
      });

      ['', null, undefined].forEach(scrollElementId => {

        mScrollbarDirective.scrollElementId = scrollElementId;
        mScrollbarDirective.initElements();

        expect(mScrollbarDirective.scrollableElement).toBe(mockJQueryElement);
      });
    });

    it('should log an error in console when element corresponding to scrollElementId cannot be found', () => {

      const scrollElementId = 'scroll-element-id-x';
      const mockJQueryElement = <JQuery>{ length: 0 };

      spyOn(window as any, '$').and.callFake(selector => {
        return selector === `#${scrollElementId}`
          ? mockJQueryElement
          : null;
      });

      spyOn(console, 'error');

      mScrollbarDirective.scrollElementId = scrollElementId;
      mScrollbarDirective.initElements();

      expect(console.error).toHaveBeenCalledWith(
        `MalihuScrollbarDirective cannot find element with provided scrollElementId: ${scrollElementId}.`);
    });
  });

  describe('initScrollbar', () => {

    it('should initialize scrollbar correctly', () => {

      const mockScrollableElement = <any>{ mCustomScrollbar: () => null };
      const mockScrollbarOptions = <MCustomScrollbar.CustomScrollbarOptions>{ axis: 'yx', theme: 'theme-x' };

      spyOn(zone, 'runOutsideAngular').and.callFake(fn => fn());
      spyOn(mockScrollableElement, 'mCustomScrollbar');

      mScrollbarDirective.scrollableElement = mockScrollableElement;
      mScrollbarDirective.scrollbarOptions = mockScrollbarOptions;
      mScrollbarDirective.initScrollbar();

      expect(zone.runOutsideAngular).toHaveBeenCalled();
      expect(mockScrollableElement.mCustomScrollbar).toHaveBeenCalledWith(mockScrollbarOptions);
    });
  });

  describe('destroyScrollbar', () => {

    it('should destroy scrollbar correctly', () => {

      const mockScrollableElement = <any>{ mCustomScrollbar: () => null };

      spyOn(zone, 'runOutsideAngular').and.callFake(fn => fn());
      spyOn(mockScrollableElement, 'mCustomScrollbar');

      mScrollbarDirective.scrollableElement = mockScrollableElement;
      mScrollbarDirective.destroyScrollbar();

      expect(zone.runOutsideAngular).toHaveBeenCalled();
      expect(mockScrollableElement.mCustomScrollbar).toHaveBeenCalledWith('destroy');
    });
  });
});
