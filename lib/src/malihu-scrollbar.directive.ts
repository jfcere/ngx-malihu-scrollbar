import { AfterViewInit, Directive, ElementRef, Inject, Input, OnDestroy } from '@angular/core';
import { MalihuScrollbarOptions } from './malihu-scrollbar.options';
import { MalihuScrollbarService } from './malihu-scrollbar.service';

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
    private mScrollbarService: MalihuScrollbarService,
    @Inject(MalihuScrollbarOptions.SCROLLBAR_OPTIONS)
    private customScrollbarOptions: MCustomScrollbar.CustomScrollbarOptions,
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
    this.mScrollbarService.initScrollbar(this.scrollableElement, Object.assign({}, this.customScrollbarOptions, this.scrollbarOptions));
  }

  destroyScrollbar() {
    try {
      this.mScrollbarService.destroy(this.scrollableElement);
    } catch (error) {
      // workaround for malihu-custom-scrollbar-plugin issue:
      // Cannot read property 'autoUpdate' of undefined
      // https://github.com/malihu/malihu-custom-scrollbar-plugin/issues/392
    }
  }
}
