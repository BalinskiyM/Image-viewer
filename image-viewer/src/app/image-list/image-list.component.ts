import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ImageEntity } from '../interfaces/image-entity.interfaces';
import { ImageService } from '../services/image.service';
import { MatDialog } from '@angular/material/dialog';
import { ImagePopupComponent } from '../image-popup/image-popup.component';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { catchError, take } from 'rxjs/operators';
import { throwError } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImageListComponent implements OnInit {

  images: ImageEntity[] = [];

  constructor(private imageService: ImageService,
              private dialogRef: MatDialog) {
  }

  ngOnInit(): void {
    this.imageService.getImages()
      .pipe(
        untilDestroyed(this)
      )
      .subscribe(
        (images: ImageEntity[]) => {
          this.images = images;
        },
        error => {
          console.error('Error fetching images:', error);
        }
      );
  }

  viewImage(image: ImageEntity): void {
    this.imageService.getImagePosition(image.position)
      .pipe(
        take(1),
        catchError((err) => {
          return throwError(err);
        })
      ).subscribe((position) => {
      if (position) {
        this.dialogRef.open(ImagePopupComponent, {
          data: {
            name: image.name,
            path: image.path,
            position
          },
          width: '600px',
          maxHeight: '500px'
        })
      }
    });
  }
}
