import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { PruebaComponent } from './prueba/prueba.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { NuevaVentaComponent } from './nueva-venta/nueva-venta.component';
import { DetalleVentaComponent } from './detalle-venta/detalle-venta.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { EliminarProductoComponent } from './eliminar-producto/eliminar-producto.component';
import { ModificarProductoComponent } from './modificar-producto/modificar-producto.component';
import { ContactosComponent } from './contactos/contactos.component';
import { AgregarContactoComponent } from './agregar-contacto/agregar-contacto.component';
import { EliminarContactoComponent } from './eliminar-contacto/eliminar-contacto.component';
import { ModificarContactoComponent } from './modificar-contacto/modificar-contacto.component';
import { InputComponent } from './input/input.component';
import { TextareaComponent } from './textarea/textarea.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ToolbarComponent,
    PruebaComponent,
    NuevaVentaComponent,
    DetalleVentaComponent,
    AgregarProductoComponent,
    EliminarProductoComponent,
    ModificarProductoComponent,
    ContactosComponent,
    AgregarContactoComponent,
    EliminarContactoComponent,
    ModificarContactoComponent,
    InputComponent,
    TextareaComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
