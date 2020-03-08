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
    mScrollbarService = TestBed.inject(MalihuScrollbarService);
  });

  describe('initScrollbar', () => {

    it('should initialize scrollbar correctly', () => {

      const jQuery =  { mCustomScrollbar: () => {} } as JQuery;
      const scrollElement = 'scroll-element-x';
      const scrollOptions =  {
        axis: 'yx',
        theme: 'theme-x',
      } as MCustomScrollbar.CustomScrollbarOptions;

      spyOn(mScrollbarService as any, 'getElement').and.returnValue(jQuery);
      spyOn(jQuery, 'mCustomScrollbar');

      mScrollbarService.initScrollbar(scrollElement, scrollOptions);

      expect(mScrollbarService['getElement']).toHaveBeenCalledWith(scrollElement);
      expect(jQuery.mCustomScrollbar).toHaveBeenCalledWith(scrollOptions);
    });

    it('should apply style correctly when element is body', () => {

      const scrollElement = document.body;

      mScrollbarService.initScrollbar(scrollElement, { theme: 'theme-x' });

      expect(scrollElement.style.position).toBe('absolute');
      expect(scrollElement.style.overflow).toBe('auto');
      expect(scrollElement.style.height).toBe('100vh');
      expect(scrollElement.style.width).toBe('100vw');
    });

    it('should not apply style when element is not body', () => {

      const scrollElement = document.createElement('DIV');
      document.body.appendChild(scrollElement);

      mScrollbarService.initScrollbar(scrollElement, { theme: 'theme-x' });

      expect(scrollElement.style.position).not.toBe('absolute');
      expect(scrollElement.style.overflow).not.toBe('auto');
      expect(scrollElement.style.height).not.toBe('100vh');
      expect(scrollElement.style.width).not.toBe('100vw');
    });
  });

  describe('scrollTo', () => {

    it('should invoke scrollTo correctly', () => {

      const jQuery =  { mCustomScrollbar: () => {} } as JQuery;
      const scrollElement = 'scroll-element-x';
      const parameter = 100;
      const scrollToParameterOptions =  {
        scrollEasing: 'scroll-easing-x',
      } as MCustomScrollbar.ScrollToParameterOptions;

      spyOn(mScrollbarService as any, 'getElement').and.returnValue(jQuery);
      spyOn(jQuery, 'mCustomScrollbar');

      mScrollbarService.scrollTo(scrollElement, parameter, scrollToParameterOptions);

      expect(mScrollbarService['getElement']).toHaveBeenCalledWith(scrollElement);
      expect(jQuery.mCustomScrollbar as Function).toHaveBeenCalledWith('scrollTo', parameter, scrollToParameterOptions);
    });
  });

  describe('update', () => {

    it('should invoke update correctly', () => {

      const jQuery =  { mCustomScrollbar: () => {} } as JQuery;
      const scrollElement = 'scroll-element-x';

      spyOn(mScrollbarService as any, 'getElement').and.returnValue(jQuery);
      spyOn(jQuery, 'mCustomScrollbar');

      mScrollbarService.update(scrollElement);

      expect(mScrollbarService['getElement']).toHaveBeenCalledWith(scrollElement);
      expect(jQuery.mCustomScrollbar as Function).toHaveBeenCalledWith('update');
    });
  });

  describe('stop', () => {

    it('should invoke stop correctly', () => {

      const jQuery =  { mCustomScrollbar: () => {} } as JQuery;
      const scrollElement = 'scroll-element-x';

      spyOn(mScrollbarService as any, 'getElement').and.returnValue(jQuery);
      spyOn(jQuery, 'mCustomScrollbar');

      mScrollbarService.stop(scrollElement);

      expect(mScrollbarService['getElement']).toHaveBeenCalledWith(scrollElement);
      expect(jQuery.mCustomScrollbar as Function).toHaveBeenCalledWith('stop');
    });
  });

  describe('disable', () => {

    it('should invoke disable correctly', () => {

      const jQuery =  { mCustomScrollbar: () => {} } as JQuery;
      const scrollElement = 'scroll-element-x';

      spyOn(mScrollbarService as any, 'getElement').and.returnValue(jQuery);
      spyOn(jQuery, 'mCustomScrollbar');

      mScrollbarService.disable(scrollElement);

      expect(mScrollbarService['getElement']).toHaveBeenCalledWith(scrollElement);
      expect(jQuery.mCustomScrollbar as Function).toHaveBeenCalledWith('disable', false);
    });

    it('should invoke disable with "reset content" option', () => {

      const jQuery =  { mCustomScrollbar: () => {} } as JQuery;
      const scrollElement = 'scroll-element-x';

      spyOn(mScrollbarService as any, 'getElement').and.returnValue(jQuery);
      spyOn(jQuery, 'mCustomScrollbar');

      mScrollbarService.disable(scrollElement, true);

      expect(mScrollbarService['getElement']).toHaveBeenCalledWith(scrollElement);
      expect(jQuery.mCustomScrollbar as Function).toHaveBeenCalledWith('disable', true);
    });
  });

  describe('destroy', () => {

    it('should invoke destroy correctly', () => {

      const jQuery =  { mCustomScrollbar: () => {} } as JQuery;
      const scrollElement = 'scroll-element-x';

      spyOn(mScrollbarService as any, 'getElement').and.returnValue(jQuery);
      spyOn(jQuery, 'mCustomScrollbar');

      mScrollbarService.destroy(scrollElement);

      expect(mScrollbarService['getElement']).toHaveBeenCalledWith(scrollElement);
      expect(jQuery.mCustomScrollbar as Function).toHaveBeenCalledWith('destroy');
    });
  });

  describe('getElement', () => {

    it('should return JQuery element when using css selector string', () => {

      const scrollElement = 'css-selector-x';
      const mockJQuery =  { mCustomScrollbar: () => {} } as JQuery;

      spyOn(window as any, '$').and.callFake(selector => {
        return selector === scrollElement
          ? mockJQuery
          : null;
      });

      const returnValue = mScrollbarService['getElement'](scrollElement);

      expect(returnValue).toBe(mockJQuery);
    });

    it('should return JQuery element when using html element', () => {

      const htmlElement = document.createElement('div');
      const mockJQuery =  { mCustomScrollbar: () => {} } as JQuery;

      spyOn(window as any, '$').and.callFake(selector => {
        return selector === htmlElement
          ? mockJQuery
          : null;
      });

      const returnValue = mScrollbarService['getElement'](htmlElement);

      expect(returnValue).toBe(mockJQuery);
    });

    it('should return JQuery element when using JQuery element', () => {

      const jQueryElement =  { jquery: null } as JQuery;

      const returnValue = mScrollbarService['getElement'](jQueryElement);

      expect(returnValue).toBe(jQueryElement);
    });

    it('should throw error when element type is unsupported', () => {

      const object =  { object: null } as any;

      expect(() => mScrollbarService['getElement'](object)).toThrowError(`Unsupported element type in MalihuScrollbarService: ${object}`);
    });
  });
});
