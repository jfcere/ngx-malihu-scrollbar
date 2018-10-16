import { ElementRef, NgZone } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { MalihuScrollbarDirective } from './malihu-scrollbar.directive';
import { MalihuScrollbarService } from './malihu-scrollbar.service';

describe('MalihuScrollbarDirective:unit', () => {
  const mockElementRef = new ElementRef({ elementRef: true, nativeElement: 'native-element-x' });

  let mScrollbarDirective: MalihuScrollbarDirective;
  let mScrollbarService: MalihuScrollbarService;

  beforeEach(() => {
    const zone = TestBed.get(NgZone);
    mScrollbarService = new MalihuScrollbarService(zone);
    mScrollbarDirective = new MalihuScrollbarDirective(mockElementRef, mScrollbarService);
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

      const mockScrollableElement = <any>{ scrollableElement: true };
      const mockScrollbarOptions = <MCustomScrollbar.CustomScrollbarOptions>{ axis: 'yx', theme: 'theme-x' };

      spyOn(mScrollbarService, 'initScrollbar');

      mScrollbarDirective.scrollableElement = mockScrollableElement;
      mScrollbarDirective.scrollbarOptions = mockScrollbarOptions;
      mScrollbarDirective.initScrollbar();

      expect(mScrollbarService.initScrollbar).toHaveBeenCalledWith(mockScrollableElement, mockScrollbarOptions);
    });
  });

  describe('destroyScrollbar', () => {

    it('should destroy scrollbar through MalihuScrollbarService correctly', () => {

      const mockScrollableElement = <any>{ scrollableElement: true };

      spyOn(mScrollbarService, 'destroy');

      mScrollbarDirective.scrollableElement = mockScrollableElement;
      mScrollbarDirective.destroyScrollbar();

      expect(mScrollbarService.destroy).toHaveBeenCalledWith(mockScrollableElement);
    });

    it('should swallow error if malihu-custom-scrollbar-plugin throws', () => {

      const mockScrollableElement = <any>{ mCustomScrollbar: () => null };

      spyOn(mockScrollableElement, 'mCustomScrollbar').and.throwError('error-x');

      mScrollbarDirective.scrollableElement = mockScrollableElement;

      expect(() => mScrollbarDirective.destroyScrollbar()).not.toThrow();
    });
  });
});
