import { Inject, Injectable, NgZone } from '@angular/core';
import { MalihuScrollbarOptions } from './malihu-scrollbar.options';

export type ScrollElement = string | JQuery | HTMLElement;

@Injectable()
export class MalihuScrollbarService {

  constructor(
    private zone: NgZone,
    @Inject(MalihuScrollbarOptions.SCROLLBAR_OPTIONS) private scrollBarOptions: Partial<MCustomScrollbar.CustomScrollbarOptions>,
  ) { }

  initScrollbar(element: ScrollElement, options?: MCustomScrollbar.CustomScrollbarOptions) {
    const jQueryElement = this.getElement(element);

    const mergedOptions = Object.assign({}, this.scrollBarOptions, options);

    this.zone.runOutsideAngular(() => jQueryElement.mCustomScrollbar(mergedOptions));

    if (jQueryElement.length > 0 && jQueryElement[0].tagName === 'BODY') {
      jQueryElement[0].style.position = 'absolute';
      jQueryElement[0].style.overflow = 'auto';
      jQueryElement[0].style.height = '100vh';
      jQueryElement[0].style.width = '100vw';
    }
  }

  scrollTo(element: ScrollElement, parameter: any, options: MCustomScrollbar.ScrollToParameterOptions) {
    this.zone.runOutsideAngular(() => this.getElement(element).mCustomScrollbar('scrollTo', parameter, options));
  }

  update(element: ScrollElement) {
    this.zone.runOutsideAngular(() => this.getElement(element).mCustomScrollbar('update'));
  }

  stop(element: ScrollElement) {
    this.zone.runOutsideAngular(() => this.getElement(element).mCustomScrollbar('stop'));
  }

  disable(element: ScrollElement, reset?: boolean) {
    this.zone.runOutsideAngular(() => this.getElement(element).mCustomScrollbar('disable', !!reset));
  }

  destroy(element: ScrollElement) {
    this.zone.runOutsideAngular(() => this.getElement(element).mCustomScrollbar('destroy'));
  }

  private getElement(element: ScrollElement): JQuery {
    if (typeof element === 'string') {
      return $(element);
    }
    if (typeof element === 'object' && element instanceof HTMLElement) {
      return $(element);
    }
    if (element instanceof jQuery || 'jquery' in Object(element)) {
      return element;
    }
    throw Error(`Unsupported element type in MalihuScrollbarService: ${element}`);
  }
}
