import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';
import { MalihuScrollbarService } from './malihu-scrollbar.service';

/**
 * Malihu Custom Scrollbar directive.
 * Use this reference link for options definition:
 * http://manos.malihu.gr/jquery-custom-content-scroller/
 */
@Directive({
  selector: '[MalihuScrollbar], [malihu-scrollbar]',
})
export class MalihuScrollbarDirective implements AfterViewInit, OnDestroy {
  @Input() scrollElementId: string | undefined;
  @Input() scrollbarOptions: MCustomScrollbar.CustomScrollbarOptions = {};

  scrollableElement: JQuery | undefined;

  constructor(
    private elementRef: ElementRef,
    private mScrollbarService: MalihuScrollbarService,
  ) { }

  ngAfterViewInit(): void {
    this.initElements();
    this.initScrollbar();
  }

  ngOnDestroy(): void {
    this.destroyScrollbar();
  }

  initElements(): void {
    this.scrollableElement = !!this.scrollElementId
      ? $(`#${this.scrollElementId}`)
      : $(this.elementRef.nativeElement);

    if (!!this.scrollElementId && this.scrollableElement.length === 0) {
      console.error(`MalihuScrollbarDirective cannot find element with provided scrollElementId: ${this.scrollElementId}.`);
    }
  }

  initScrollbar(): void {
    if (!!this.scrollableElement) {
      this.mScrollbarService.initScrollbar(this.scrollableElement, this.scrollbarOptions);
    }
  }

  destroyScrollbar(): void {
    if (!!this.scrollableElement) {
      try {
        this.mScrollbarService.destroy(this.scrollableElement);
      } catch (error) {
        // workaround for malihu-custom-scrollbar-plugin issue:
        // Cannot read property 'autoUpdate' of undefined
        // https://github.com/malihu/malihu-custom-scrollbar-plugin/issues/392
      }
    }
  }
}
