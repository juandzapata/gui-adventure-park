import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewsAtraccionesComponent } from './views-atracciones/views-atracciones.component';
import { ViewsParquesComponent } from './views-parques/views-parques.component';
import { ViewsZonasComponent } from './views-zonas/views-zonas.component';

const routes: Routes = [
  {
    path:'views-parque',
    component: ViewsParquesComponent,
  },
  {
    path: 'views-atracciones',
    component: ViewsAtraccionesComponent,
  },
  {
    path:'views-planes',
    component: ViewsParquesComponent,
  },
  {
    path: 'views-zonas',
    component: ViewsZonasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
