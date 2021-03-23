import { InjectionToken } from '@angular/core';

export class MalihuScrollbarOptions {
    static SCROLLBAR_OPTIONS = new InjectionToken<Partial<MCustomScrollbar.CustomScrollbarOptions>>('SCROLLBAR_OPTIONS');
}
