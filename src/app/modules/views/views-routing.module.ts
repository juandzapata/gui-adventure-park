import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewsAtraccionesComponent } from './views-atracciones/views-atracciones.component';
import { ViewsParquesComponent } from './views-parques/views-parques.component';
import { ViewsPlanesAtraccionComponent } from './views-planes-atraccion/views-planes-atraccion.component';
import { ViewsPlanesComponent } from './views-planes/views-planes.component';
import { ViewsPuestosComponent } from './views-puestos/views-puestos.component';
import { ViewsZonasComponent } from './views-zonas/views-zonas.component';

const routes: Routes = [
  {
    path:'views-parque',
    component: ViewsParquesComponent,
  },
  {
    path: 'views-atracciones/:id',
    component: ViewsAtraccionesComponent,
  },
  {
    path: 'views-zonas/:id',
    component: ViewsZonasComponent,
  },
  {
    path: 'views-puestos/:id',
    component: ViewsPuestosComponent,
  },
  {
    path: 'views-planes/:id',
    component: ViewsPlanesComponent,
  },
  {
    path: 'views-planes-atraccion',
    component: ViewsPlanesAtraccionComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
