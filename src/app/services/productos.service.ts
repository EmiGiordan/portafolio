import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto_idx } from '../interfaces/producto_idx.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto_idx[] = [];

  constructor( private http: HttpClient ) { 

    this.cargarProductos();
   }

  private cargarProductos() {

    this.http.get ('https://angular-html-e1908-default-rtdb.firebaseio.com/productos_idx.json')
        .subscribe ( (resp : any) => {


          this.productos =  resp;
          this.cargando = false;
          
          // setTimeout(() => {
            
          //   this.cargando = false;

          // }, 1000);


        } ) ;

  }
}
