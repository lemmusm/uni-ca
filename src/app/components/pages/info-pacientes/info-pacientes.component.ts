import { Component, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-info-pacientes',
  templateUrl: './info-pacientes.component.html',
  styles: []
})
export class InfoPacientesComponent implements OnInit {
  constructor(private galleryService: GalleryService) { }

  public masonryOptions: NgxMasonryOptions = {
    transitionDuration: '0.5s',
    gutter: 20,
    resize: true,
    initLayout: true
  };

  masonryImages: any;

  getPacientes() {
    this.galleryService.getImgPacientes().subscribe((data: any) => {
      this.masonryImages = data;
    });
  }
  ngOnInit() {
    this.getPacientes();
  }

}
