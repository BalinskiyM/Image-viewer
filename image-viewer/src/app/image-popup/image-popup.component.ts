import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImagePopupData } from './interfaces/image-popup-data.interface';

@Component({
  selector: 'app-image-popup',
  templateUrl: './image-popup.component.html',
  styleUrls: ['./image-popup.component.scss']
})
export class ImagePopupComponent {
  zoomLevel = 1; // Initial zoom level
  maxZoomLevel = 2; // Maximum allowed zoom level
  minZoomLevel = 0.5; // Minimum allowed zoom level

  constructor(@Inject(MAT_DIALOG_DATA) public data: ImagePopupData) {}

  getInitialStyles(): Record<string, string> {
    // Calculate the translation values based on the specified x and y coordinates
    const translateX = `calc(-50% + ${this.data.position.x}px)`;
    const translateY = `calc(-50% + ${this.data.position.y}px)`;

    return {
      transform: `translate(${translateX}, ${translateY}) scale(${this.zoomLevel})`,
    };
  }

  zoomToFit(): void {
    // Implement logic to zoom the image to fit the display while maintaining its aspect ratio
    // You may need to calculate the appropriate zoom level based on the image and display dimensions
    // For simplicity, this example sets a fixed zoom level of 1
    this.zoomLevel = 1;
  }

  zoomIn(): void {
    if (this.zoomLevel < this.maxZoomLevel) {
      this.zoomLevel += 0.2;
    }
  }

  zoomOut(): void {
    if (this.zoomLevel > this.minZoomLevel) {
      this.zoomLevel -= 0.2;
    }
  }
}
