import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImagePopupComponent } from './image-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NgxImageZoomModule } from 'ngx-image-zoom';

@NgModule({
  declarations: [
    ImagePopupComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    NgxImageZoomModule
  ],
  exports: [
    ImagePopupComponent
  ],
})
export class ImagePopupModule {
}
