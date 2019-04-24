import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  API_URL = 'https://uni-ca.com.mx/data'; // PRODUCTION_SERVER
  // API_URL = 'http://localhost:4200/data'; // LOCAL_SERVER
  constructor(private http: HttpClient) { }

  getImgInstalaciones() {
    return this.http.get(`${this.API_URL}/instalaciones.json`);
  }

  getClinica() {
    return this.http.get(`${this.API_URL}/clinica.json`);
  }

  getImgPacientes() {
    return this.http.get(`${this.API_URL}/pacientes.json`);
  }

  getComodin() {
    return this.http.get(`${this.API_URL}/comodin.json`);
  }

  getHorarios() {
    return this.http.get(`${this.API_URL}/horarios.json`);
  }
}
