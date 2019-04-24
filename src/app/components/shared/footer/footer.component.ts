import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {
  year = new Date().getFullYear();
  horario: any;
  constructor(private apiservice: GalleryService) {
    this.getHorarios();
  }

  ngOnInit() { }

  getHorarios() {
    this.apiservice.getHorarios()
      .subscribe(
        data => {
          this.horario = data;
        }
      );
  }
}
