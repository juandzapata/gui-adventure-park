import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsParquesComponent } from './views-parques/views-parques.component';
import { ViewsAtraccionesComponent } from './views-atracciones/views-atracciones.component';
import { ViewsPlanesComponent } from './views-planes/views-planes.component';
import { ViewsZonasComponent } from './views-zonas/views-zonas.component';
import { SafePipe } from 'src/app/safe.pipe';
import { ViewsPuestosComponent } from './views-puestos/views-puestos.component';
import { CreateCompraComponent } from '../purchase/compra/create-compra/create-compra.component';
import { PurchaseModule } from '../purchase/purchase.module';
import { PurchaseRoutingModule } from '../purchase/purchase-routing.module';




@NgModule({
  declarations: [
    ViewsParquesComponent,
    ViewsAtraccionesComponent,
    ViewsPlanesComponent,
    ViewsZonasComponent,
    SafePipe,
    ViewsPuestosComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    PurchaseRoutingModule
  ]
})
export class ViewsModule { }
