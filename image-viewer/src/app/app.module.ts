import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageListModule } from './image-list/image-list.module';
import { ImagePopupModule } from './image-popup/image-popup.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ImageListModule,
    ImagePopupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
