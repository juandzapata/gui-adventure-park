import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './public/master-page/header/header.component';
import { FooterComponent } from './public/master-page/footer/footer.component';
import { NotFoundComponent } from './public/errors/not-found/not-found.component';
import { InternalServerErrorComponent } from './public/errors/internal-server-error/internal-server-error.component';
import { HomeComponent } from './public/master-page/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewParqueComponent } from './public/master-page/views/view-parque/view-parque.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    InternalServerErrorComponent,
    HomeComponent,
    ViewParqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
