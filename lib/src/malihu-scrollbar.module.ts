import { ModuleWithProviders, NgModule } from '@angular/core';

import { MalihuScrollbarDirective } from './malihu-scrollbar.directive';
import { MalihuScrollbarOptions } from './malihu-scrollbar.options';
import { MalihuScrollbarService } from './malihu-scrollbar.service';

@NgModule({
  exports: [MalihuScrollbarDirective],
  declarations: [MalihuScrollbarDirective],
})
export class MalihuScrollbarModule {
  static forRoot(options?: MCustomScrollbar.CustomScrollbarOptions): ModuleWithProviders {
    return {
      ngModule: MalihuScrollbarModule,
      providers: [
        MalihuScrollbarService,
        {
          provide: MalihuScrollbarOptions.SCROLLBAR_OPTIONS,
          useValue: options,
        },
      ],
    };
  }
  static forChild(): ModuleWithProviders {
    return {
      ngModule: MalihuScrollbarModule,
    };
  }
}
