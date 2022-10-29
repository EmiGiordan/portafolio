import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item1',
  templateUrl: './item1.component.html',
  styleUrls: ['./item1.component.css']
})
export class Item1Component implements OnInit {

  producto?: ProductoDescripcion;
  id?: string;

  constructor( private route: ActivatedRoute,
               public productoService: ProductosService) {}

  ngOnInit(): void {

    this.route.params
        .subscribe(parametros => {
          
          this.productoService.getProducto(parametros['id'])
              .subscribe( (producto: any) =>{

                this.id = parametros['id'];
                this.producto = producto;

              });



        });

  }

}
