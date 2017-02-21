import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

import { MalihuScrollbarDemoModule } from './app/malihu-scrollbar-demo/malihu-scrollbar-demo.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(MalihuScrollbarDemoModule);
