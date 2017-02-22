import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MalihuScrollbarDemoComponent } from './malihu-scrollbar-demo.component';
import { MalihuScrollbarModule } from '../malihu-scrollbar';

@NgModule({
  imports: [
    BrowserModule,
    MalihuScrollbarModule.forRoot(),
  ],
  declarations: [MalihuScrollbarDemoComponent],
  bootstrap: [MalihuScrollbarDemoComponent],
})
export class MalihuScrollbarDemoModule { }
