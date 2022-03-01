import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EstructuraComponent } from './core/componentes/estructura/estructura.component';
import { HeaderComponent } from './core/componentes/header/header.component';
import { FooterComponent } from './core/componentes/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    EstructuraComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
