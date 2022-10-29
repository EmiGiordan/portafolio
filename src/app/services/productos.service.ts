import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto_idx } from '../interfaces/producto_idx.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto_idx[] = [];
  productosFiltrado: Producto_idx[] = [];

  constructor( private http: HttpClient ) { 

    this.cargarProductos();
   }

  private cargarProductos() {

    return new Promise ( ( resolve, reject ) =>

      this.http.get ('https://angular-html-e1908-default-rtdb.firebaseio.com/productos_idx.json')
          .subscribe ( (resp : any) => {


            this.productos =  resp;
            this.cargando = false;
            resolve(0);
            
            
            // setTimeout(() => {
              
            //   this.cargando = false;

            // }, 1000);

          } ) 
     );


  }

  getProducto (id: string) {

    return this.http.get(`https://angular-html-e1908-default-rtdb.firebaseio.com/productos/${ id }.json`);

  }

  buscarProducto ( termino: string ) {

    // cargar productos
    if ( this.productos.length === 0 ) {
      this.cargarProductos().then( () => {
        // ejecutar después de tener los productos
        // Aplicar filtro
        this.filtrarProductos( termino );

      });

    } else {
      //aplicar el filtro
      this.filtrarProductos( termino );

    }

  }

  private filtrarProductos (termino: string ) {

    this.productosFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach ( prod => {

      const tituloLower = prod.titulo.toLocaleLowerCase();

      if ( prod.categoria?.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0 ) {
        this.productosFiltrado.push( prod );

      }

    });

  }

}
