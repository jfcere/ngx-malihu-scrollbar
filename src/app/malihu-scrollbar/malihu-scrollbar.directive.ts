import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, NgZone } from '@angular/core';

/**
 * Malihu Custom Scrollbar directive
 * Use this reference link for options definition
 * http://manos.malihu.gr/jquery-custom-content-scroller/
 */
@Directive({
  selector: '[MalihuScrollbar], [malihu-scrollbar]',
})
export class MalihuScrollbarDirective implements AfterViewInit, OnDestroy {
  @Input() scrollElementId: string;
  @Input() scrollbarOptions: MCustomScrollbar.CustomScrollbarOptions;

  scrollableElement: JQuery;

  constructor(
    private elementRef: ElementRef,
    private zone: NgZone,
  ) { }

  ngAfterViewInit() {
    this.initElements();
    this.initScrollbar();
  }

  ngOnDestroy() {
    this.destroyScrollbar();
  }

  initElements() {
    this.scrollableElement = !!this.scrollElementId
      ? $(`#${this.scrollElementId}`)
      : $(this.elementRef.nativeElement);

    if (!!this.scrollElementId && this.scrollableElement.length === 0) {
      console.error(`MalihuScrollbarDirective cannot find element with provided scrollElementId: ${this.scrollElementId}.`);
    }
  }

  initScrollbar() {
    this.zone.runOutsideAngular(() => this.scrollableElement.mCustomScrollbar(this.scrollbarOptions));
  }

  destroyScrollbar() {
    this.zone.runOutsideAngular(() => this.scrollableElement.mCustomScrollbar('destroy'));
  }
}
