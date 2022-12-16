import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsParquesComponent } from './views-parques/views-parques.component';
import { ViewsAtraccionesComponent } from './views-atracciones/views-atracciones.component';
import { ViewsPlanesComponent } from './views-planes/views-planes.component';
import { ViewsZonasComponent } from './views-zonas/views-zonas.component';


@NgModule({
  declarations: [
    ViewsParquesComponent,
    ViewsAtraccionesComponent,
    ViewsPlanesComponent,
    ViewsZonasComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }