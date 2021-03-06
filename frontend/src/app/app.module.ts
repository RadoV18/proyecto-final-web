import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgImageSliderModule } from 'ng-image-slider';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

const MaterialModules = [
  MatToolbarModule,
  BrowserAnimationsModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatSidenavModule,
  MatListModule,
  MatTableModule,
  MatSnackBarModule,
  MatCardModule,
  MatGridListModule
];

// Components
import { ToolbarComponent } from './toolbar/toolbar.component';
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
import { InputComponent } from './input/input.component';
import { TextareaComponent } from './textarea/textarea.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ButtonComponent } from './button/button.component';
import { InicioComponent } from './inicio/inicio.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginComponent } from './login/login.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductCounterComponent } from './product-counter/product-counter.component';

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
    FileUploadComponent,
    ButtonComponent,
    InicioComponent,
    CarouselComponent,
    LoginComponent,
    ProductCardComponent,
    ProductCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    [MaterialModules]
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
