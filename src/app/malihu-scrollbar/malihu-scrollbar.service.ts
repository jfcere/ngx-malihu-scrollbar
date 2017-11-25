import { Injectable, NgZone } from '@angular/core';

export type ScrollElement = string | JQuery | HTMLElement;

@Injectable()
export class MalihuScrollbarService {

  constructor(
    private zone: NgZone,
  ) { }

  initScrollbar(element: ScrollElement, options: MCustomScrollbar.CustomScrollbarOptions) {
    this.zone.runOutsideAngular(() => this.getElement(element).mCustomScrollbar(options));
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

  disable(element: ScrollElement) {
    this.zone.runOutsideAngular(() => this.getElement(element).mCustomScrollbar('disable'));
  }

  destroy(element: ScrollElement) {
    this.zone.runOutsideAngular(() => this.getElement(element).mCustomScrollbar('destroy'));
  }

  private getElement(element: ScrollElement): JQuery {
    if (typeof element === 'string' || element instanceof String) {
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
