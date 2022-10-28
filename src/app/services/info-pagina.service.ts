import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { InfoEquipo } from '../interfaces/info-equipo.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargando = true;

  // infoEq: InfoEquipo = {};
  // cargandoEquipo = false;
  equipo: any[] = [];
  cargandoEquipo = true;

  constructor( private http: HttpClient ) {

    this.cargarInfo();
    this.cargarEquipo();

   }

   private cargarInfo() {

    this.http.get('assets/data/data-pagina.json')
        .subscribe( ( resp: InfoPagina ) => {

      this.cargando = false;
      this.info = resp;

    });
   }

   private cargarEquipo() {

    this.http.get('https://angular-html-e1908-default-rtdb.firebaseio.com/equipo.json')
        .subscribe( (resp: any) => {

          this.cargandoEquipo = false;
          this.equipo = resp;

        } ) ;




   }

  

}
