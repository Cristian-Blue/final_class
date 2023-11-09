import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './page/producto/producto.component';
import { ListarComponent } from './components/listar/listar.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { ActualizarComponent } from './components/actualizar/actualizar.component';
import { EliminarComponent } from './components/eliminar/eliminar.component';
import { ProductoRoutingModule } from './producto-routing.module';



@NgModule({
  declarations: [
    ProductoComponent,
    ListarComponent,
    AgregarComponent,
    ActualizarComponent,
    EliminarComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
