import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    MalihuScrollbarModule.forRoot(),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
