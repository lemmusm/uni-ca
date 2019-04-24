import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styles: []
})
export class ContactoComponent implements OnInit {
  public iconUrl = '../../../../assets/img/map-locator.png';
  horario: any;

  constructor(private apiservice: GalleryService) {
  }

  ngOnInit() {
    this.getHorarios();
  }

  getHorarios() {
    this.apiservice.getHorarios()
      .subscribe(
        data => {
          this.horario = data;
        }
      );
  }
}
