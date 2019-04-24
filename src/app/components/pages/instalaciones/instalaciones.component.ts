import { Component, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';
import { GalleryService } from '../../../services/gallery.service';

@Component({
  selector: 'app-instalaciones',
  templateUrl: './instalaciones.component.html',
  styles: []
})
export class InstalacionesComponent implements OnInit {
  constructor(private galleryService: GalleryService) { }

  public masonryOptions: NgxMasonryOptions = {
    transitionDuration: '0.5s',
    gutter: 20,
    resize: true,
    initLayout: true
  };

  masonryImages: any;

  getInstalaciones() {
    this.galleryService.getImgInstalaciones().subscribe(data => {
      this.masonryImages = data;
    },
      error => {
        console.error('error: ');
        console.error(error);
      });
  }
  ngOnInit() {
    this.getInstalaciones();
  }

}
