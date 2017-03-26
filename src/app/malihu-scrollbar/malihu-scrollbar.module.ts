import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';

import { MalihuScrollbarDirective } from './malihu-scrollbar.directive';
import { MalihuScrollbarService } from './malihu-scrollbar.service';

@NgModule({
  exports: [MalihuScrollbarDirective],
  declarations: [MalihuScrollbarDirective],
  providers: [MalihuScrollbarService],
})
export class MalihuScrollbarModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MalihuScrollbarModule,
      providers: [MalihuScrollbarService],
    };
  }
}
