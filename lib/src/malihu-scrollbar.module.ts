import { ModuleWithProviders, NgModule } from '@angular/core';

import { MalihuScrollbarDirective } from './malihu-scrollbar.directive';
import { MalihuScrollbarService } from './malihu-scrollbar.service';

@NgModule({
  exports: [MalihuScrollbarDirective],
  declarations: [MalihuScrollbarDirective],
})
export class MalihuScrollbarModule {
  static forRoot(): ModuleWithProviders<MalihuScrollbarModule> {
    return {
      ngModule: MalihuScrollbarModule,
      providers: [MalihuScrollbarService],
    };
  }
  static forChild(): ModuleWithProviders<MalihuScrollbarModule> {
    return {
      ngModule: MalihuScrollbarModule,
    };
  }
}
