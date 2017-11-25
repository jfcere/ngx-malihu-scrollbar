import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { MalihuScrollbarDemoModule } from './app/malihu-scrollbar-demo/malihu-scrollbar-demo.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(MalihuScrollbarDemoModule)
  .catch(err => console.log(err));
