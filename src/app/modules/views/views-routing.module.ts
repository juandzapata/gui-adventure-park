import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewsAtraccionesComponent } from './views-atracciones/views-atracciones.component';
import { ViewsParquesComponent } from './views-parques/views-parques.component';
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
    path:'views-planes',
    component: ViewsParquesComponent,
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
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
