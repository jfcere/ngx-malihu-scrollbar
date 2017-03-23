import { TestBed } from '@angular/core/testing';
import { MalihuScrollbarService } from './malihu-scrollbar.service';

describe('MalihuScrollbarService:unit', () => {
  let mScrollbarService: MalihuScrollbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MalihuScrollbarService,
      ],
    });
  });

  beforeEach(() => {
    mScrollbarService = TestBed.get(MalihuScrollbarService);
  });

  describe('initScrollbar', () => {

    it('should initialize scrollbar correctly', () => {

      const jQuery = <JQuery>{ mCustomScrollbar: () => {} };
      const scrollElement = 'scroll-element-x';
      const scrollOptions = <MCustomScrollbar.CustomScrollbarOptions>{
        axis: 'yx',
        theme: 'theme-x',
      };

      spyOn(mScrollbarService, 'getElement').and.returnValue(jQuery);
      spyOn(jQuery, 'mCustomScrollbar');

      mScrollbarService.initScrollbar(scrollElement, scrollOptions);

      expect(mScrollbarService['getElement']).toHaveBeenCalledWith(scrollElement);
      expect(jQuery.mCustomScrollbar).toHaveBeenCalledWith(scrollOptions);
    });
  });

  describe('scrollTo', () => {

    it('should invoke scrollTo correctly', () => {

      const jQuery = <JQuery>{ mCustomScrollbar: () => {} };
      const scrollElement = 'scroll-element-x';
      const parameter = 100;
      const scrollToParameterOptions = <MCustomScrollbar.ScrollToParameterOptions>{
        scrollEasing: 'scroll-easing-x',
      };

      spyOn(mScrollbarService, 'getElement').and.returnValue(jQuery);
      spyOn(jQuery, 'mCustomScrollbar');

      mScrollbarService.scrollTo(scrollElement, parameter, scrollToParameterOptions);

      expect(mScrollbarService['getElement']).toHaveBeenCalledWith(scrollElement);
      expect(jQuery.mCustomScrollbar).toHaveBeenCalledWith('scrollTo', parameter, scrollToParameterOptions);
    });
  });

  describe('update', () => {

    it('should invoke update correctly', () => {

      const jQuery = <JQuery>{ mCustomScrollbar: () => {} };
      const scrollElement = 'scroll-element-x';

      spyOn(mScrollbarService, 'getElement').and.returnValue(jQuery);
      spyOn(jQuery, 'mCustomScrollbar');

      mScrollbarService.update(scrollElement);

      expect(mScrollbarService['getElement']).toHaveBeenCalledWith(scrollElement);
      expect(jQuery.mCustomScrollbar).toHaveBeenCalledWith('update');
    });
  });

  describe('stop', () => {

    it('should invoke stop correctly', () => {

      const jQuery = <JQuery>{ mCustomScrollbar: () => {} };
      const scrollElement = 'scroll-element-x';

      spyOn(mScrollbarService, 'getElement').and.returnValue(jQuery);
      spyOn(jQuery, 'mCustomScrollbar');

      mScrollbarService.stop(scrollElement);

      expect(mScrollbarService['getElement']).toHaveBeenCalledWith(scrollElement);
      expect(jQuery.mCustomScrollbar).toHaveBeenCalledWith('stop');
    });
  });

  describe('disable', () => {

    it('should invoke disable correctly', () => {

      const jQuery = <JQuery>{ mCustomScrollbar: () => {} };
      const scrollElement = 'scroll-element-x';

      spyOn(mScrollbarService, 'getElement').and.returnValue(jQuery);
      spyOn(jQuery, 'mCustomScrollbar');

      mScrollbarService.disable(scrollElement);

      expect(mScrollbarService['getElement']).toHaveBeenCalledWith(scrollElement);
      expect(jQuery.mCustomScrollbar).toHaveBeenCalledWith('disable');
    });
  });

  describe('destroy', () => {

    it('should invoke destroy correctly', () => {

      const jQuery = <JQuery>{ mCustomScrollbar: () => {} };
      const scrollElement = 'scroll-element-x';

      spyOn(mScrollbarService, 'getElement').and.returnValue(jQuery);
      spyOn(jQuery, 'mCustomScrollbar');

      mScrollbarService.destroy(scrollElement);

      expect(mScrollbarService['getElement']).toHaveBeenCalledWith(scrollElement);
      expect(jQuery.mCustomScrollbar).toHaveBeenCalledWith('destroy');
    });
  });

  describe('getElement', () => {

    it('should return JQuery element when using css selector string', () => {

      const scrollElement = 'css-selector-x';
      const mockJQuery = <JQuery>{ mCustomScrollbar: () => {} };

      spyOn(window, '$').and.callFake(selector => {
        return selector === scrollElement
          ? mockJQuery
          : null;
      });

      const returnValue = mScrollbarService['getElement'](scrollElement);

      expect(returnValue).toBe(mockJQuery);
    });

    it('should return JQuery element when using html element', () => {

      const htmlElement = document.createElement('div');
      const mockJQuery = <JQuery>{ mCustomScrollbar: () => {} };

      spyOn(window, '$').and.callFake(selector => {
        return selector === htmlElement
          ? mockJQuery
          : null;
      });

      const returnValue = mScrollbarService['getElement'](htmlElement);

      expect(returnValue).toBe(mockJQuery);
    });

    it('should return JQuery element when using JQuery element', () => {

      const jQueryElement = <JQuery>{ jquery: null };

      const returnValue = mScrollbarService['getElement'](jQueryElement);

      expect(returnValue).toBe(jQueryElement);
    });
  });
});
