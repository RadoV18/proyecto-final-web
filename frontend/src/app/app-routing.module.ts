import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { PruebaComponent } from './prueba/prueba.component';
import { NuevaVentaComponent } from './nueva-venta/nueva-venta.component'

const routes: Routes = [
  {path: 'ventas', 
  component: PruebaComponent},

  {path: 'ventas/nueva',
  component: NuevaVentaComponent},  

  {path: 'footer', 
  component: FooterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
