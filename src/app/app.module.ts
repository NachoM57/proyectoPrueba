import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerComponent } from './COMPONENTES/banner/banner.component';
import { TiposCafesComponent } from './COMPONENTES/tipos-cafes/tipos-cafes.component';
import { CafeServiciosComponent } from './COMPONENTES/cafe-servicios/cafe-servicios.component';
import { BlogComponent } from './COMPONENTES/blog/blog.component';
import { FooterComponent } from './COMPONENTES/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { CafeEspecialComponent } from './COMPONENTES/cafe-especial/cafe-especial.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    TiposCafesComponent,
    CafeServiciosComponent,
    BlogComponent,
    FooterComponent,
    CafeEspecialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
