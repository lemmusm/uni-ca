import { Component, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-farmacos-articulos',
  templateUrl: './farmacos-articulos.component.html',
  styles: []
})
export class FarmacosArticulosComponent implements OnInit {
  constructor(private galleryService: GalleryService) { }

  public masonryOptions: NgxMasonryOptions = {
    transitionDuration: '0.5s',
    gutter: 20,
    resize: true,
    initLayout: true
  };

  masonryImages: any;

  getComodin() {
    this.galleryService.getComodin().subscribe((data: any) => {
      this.masonryImages = data;
    });
  }
  ngOnInit() {
    this.getComodin();
  }
}
