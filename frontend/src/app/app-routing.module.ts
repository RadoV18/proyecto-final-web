import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { PruebaComponent } from './prueba/prueba.component';
import { NuevaVentaComponent } from './nueva-venta/nueva-venta.component';
import { DetalleVentaComponent } from './detalle-venta/detalle-venta.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { EliminarProductoComponent } from './eliminar-producto/eliminar-producto.component';
import { ModificarProductoComponent } from './modificar-producto/modificar-producto.component';
import { ContactosComponent } from './contactos/contactos.component';
import { AgregarContactoComponent } from './agregar-contacto/agregar-contacto.component';
import { EliminarContactoComponent } from './eliminar-contacto/eliminar-contacto.component';
import { ModificarContactoComponent } from './modificar-contacto/modificar-contacto.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: 'login',
  component: LoginComponent},

  {path: 'ventas', 
  component: PruebaComponent},

  {path: 'ventas/nueva',
  component: NuevaVentaComponent},  

  {path: 'ventas/detalle',
  component: DetalleVentaComponent},  

  {path: 'productos/agregar',
  component: AgregarProductoComponent},  
  
  {path: 'productos/eliminar',
  component: EliminarProductoComponent},  

  {path: 'productos/modificar',
  component: ModificarProductoComponent},

  {path: 'contactos/todos',
  component: ContactosComponent},

  {path: 'contactos/agregar',
  component: AgregarContactoComponent},

  {path: 'contactos/eliminar',
  component: EliminarContactoComponent},

  {path: 'contactos/modificar',
  component: ModificarContactoComponent},

  {path: 'footer', 
  component: FooterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
