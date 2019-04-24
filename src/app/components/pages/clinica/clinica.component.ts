import { Component, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';
import { GalleryService } from 'src/app/services/gallery.service';


@Component({
  selector: 'app-clinica',
  templateUrl: './clinica.component.html',
  styles: []
})
export class ClinicaComponent implements OnInit {
  public masonryOptions: NgxMasonryOptions = {
    transitionDuration: '0.5s',
    gutter: 20,
    resize: true,
    initLayout: true
  };

  clinica: any;

  constructor(private galleryservice: GalleryService) {
  }

  ngOnInit() {
    this.getClinica();
  }

  getClinica() {
    this.galleryservice.getClinica()
      .subscribe(
        data => {
          this.clinica = data;
        }
      );
  }
}
