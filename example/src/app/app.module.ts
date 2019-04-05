import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxDhis2MapModule } from '@hisptz/ngx-dhis2-map';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxDhis2MapModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
