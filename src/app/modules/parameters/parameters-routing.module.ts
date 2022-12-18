import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from 'src/app/guards/authenticated.guard';
import { CreateAtraccionesComponent } from './atracciones/create-atracciones/create-atracciones.component';
import { EditAtraccionesComponent } from './atracciones/edit-atracciones/edit-atracciones.component';
import { ListAtraccionesComponent } from './atracciones/list-atracciones/list-atracciones.component';
import { RemoveAtraccionesComponent } from './atracciones/remove-atracciones/remove-atracciones.component';
import { CreateCiudadesComponent } from './ciudades/create-ciudades/create-ciudades.component';
import { EditCiudadesComponent } from './ciudades/edit-ciudades/edit-ciudades.component';
import { ListCiudadesComponent } from './ciudades/list-ciudades/list-ciudades.component';
import { RemoveCiudadesComponent } from './ciudades/remove-ciudades/remove-ciudades.component';
import { CreateDepartamentosComponent } from './departamentos/create-departamentos/create-departamentos.component';
import { EditDepartamentosComponent } from './departamentos/edit-departamentos/edit-departamentos.component';
import { ListDepartamentosComponent } from './departamentos/list-departamentos/list-departamentos.component';
import { RemoveDepartamentosComponent } from './departamentos/remove-departamentos/remove-departamentos.component';
import { CreateParqueComponent } from './parques/create-parque/create-parque.component';
import { EditParqueComponent } from './parques/edit-parque/edit-parque.component';
import { ListParqueComponent } from './parques/list-parque/list-parque.component';
import { RemoveParqueComponent } from './parques/remove-parque/remove-parque.component';
import { CreatePlanAtraccionComponent } from './plan-atraccion/create-plan-atraccion/create-plan-atraccion.component';
import { EditPlanAtraccionComponent } from './plan-atraccion/edit-plan-atraccion/edit-plan-atraccion.component';
import { ListPlanAtraccionComponent } from './plan-atraccion/list-plan-atraccion/list-plan-atraccion.component';
import { RemovePlanAtraccionComponent } from './plan-atraccion/remove-plan-atraccion/remove-plan-atraccion.component';
import { CreatePlanesComponent } from './planes/create-planes/create-planes.component';
import { EditPlanesComponent } from './planes/edit-planes/edit-planes.component';
import { ListPlanesComponent } from './planes/list-planes/list-planes.component';
import { RemovePlanesComponent } from './planes/remove-planes/remove-planes.component';
import { CreatePuestosComponent } from './puestos/create-puestos/create-puestos.component';
import { EditPuestosComponent } from './puestos/edit-puestos/edit-puestos.component';
import { ListPuestosComponent } from './puestos/list-puestos/list-puestos.component';
import { RemovePuestosComponent } from './puestos/remove-puestos/remove-puestos.component';
import { EditUsuarioComponent } from './usuario/edit-usuario/edit-usuario.component';
import { CreateZonasComponent } from './zonas/create-zonas/create-zonas.component';
import { EditZonasComponent } from './zonas/edit-zonas/edit-zonas.component';
import { ListZonasComponent } from './zonas/list-zonas/list-zonas.component';
import { RemoveZonasComponent } from './zonas/remove-zonas/remove-zonas.component';


const routes: Routes = [
  {
    path:'create-parque',
    component:CreateParqueComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'edit-parque/:id',
    component:EditParqueComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'remove-parque/:id',
    component:RemoveParqueComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'list-parque',
    component:ListParqueComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'create-atracciones',
    component:CreateAtraccionesComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'edit-atracciones/:id',
    component:EditAtraccionesComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'remove-atracciones/:id',
    component:RemoveAtraccionesComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'list-atracciones',
    component:ListAtraccionesComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'create-ciudades',
    component:CreateCiudadesComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'edit-ciudades/:id',
    component:EditCiudadesComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'remove-ciudades/:id',
    component:RemoveCiudadesComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'list-ciudades',
    component:ListCiudadesComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'create-departamentos',
    component:CreateDepartamentosComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'edit-departamentos/:id',
    component:EditDepartamentosComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'remove-departamentos/:id',
    component:RemoveDepartamentosComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'list-departamentos',
    component:ListDepartamentosComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'create-planes',
    component:CreatePlanesComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'edit-planes/:id',
    component:EditPlanesComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'remove-planes/:id',
    component:RemovePlanesComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'list-planes',
    component:ListPlanesComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'create-puestos',
    component:CreatePuestosComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'edit-puestos/:id',
    component:EditPuestosComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'remove-puestos/:id',
    component:RemovePuestosComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'list-puestos',
    component:ListPuestosComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'create-zonas',
    component:CreateZonasComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'edit-zonas/:id',
    component:EditZonasComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'remove-zonas/:id',
    component:RemoveZonasComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'list-zonas',
    component:ListZonasComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'edit-usuario',
    component:EditUsuarioComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'list-plan-atraccion',
    component:ListPlanAtraccionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'create-plan-atraccion',
    component:CreatePlanAtraccionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'edit-plan-atraccion/:id',
    component:EditPlanAtraccionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'remove-plan-atraccion/:id',
    component:RemovePlanAtraccionComponent,
    canActivate: [AuthenticatedGuard]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
