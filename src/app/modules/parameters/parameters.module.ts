import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { CreateParqueComponent } from './parques/create-parque/create-parque.component';
import { EditParqueComponent } from './parques/edit-parque/edit-parque.component';
import { RemoveParqueComponent } from './parques/remove-parque/remove-parque.component';
import { ListParqueComponent } from './parques/list-parque/list-parque.component';
import { CreateAtraccionesComponent } from './atracciones/create-atracciones/create-atracciones.component';
import { EditAtraccionesComponent } from './atracciones/edit-atracciones/edit-atracciones.component';
import { RemoveAtraccionesComponent } from './atracciones/remove-atracciones/remove-atracciones.component';
import { ListAtraccionesComponent } from './atracciones/list-atracciones/list-atracciones.component';
import { CreateZonasComponent } from './zonas/create-zonas/create-zonas.component';
import { EditZonasComponent } from './zonas/edit-zonas/edit-zonas.component';
import { RemoveZonasComponent } from './zonas/remove-zonas/remove-zonas.component';
import { ListZonasComponent } from './zonas/list-zonas/list-zonas.component';
import { CreatePuestosComponent } from './puestos/create-puestos/create-puestos.component';
import { EditPuestosComponent } from './puestos/edit-puestos/edit-puestos.component';
import { RemovePuestosComponent } from './puestos/remove-puestos/remove-puestos.component';
import { ListPuestosComponent } from './puestos/list-puestos/list-puestos.component';
import { CreatePlanesComponent } from './planes/create-planes/create-planes.component';
import { EditPlanesComponent } from './planes/edit-planes/edit-planes.component';
import { RemovePlanesComponent } from './planes/remove-planes/remove-planes.component';
import { ListPlanesComponent } from './planes/list-planes/list-planes.component';
import { CreateDepartamentosComponent } from './departamentos/create-departamentos/create-departamentos.component';
import { EditDepartamentosComponent } from './departamentos/edit-departamentos/edit-departamentos.component';
import { RemoveDepartamentosComponent } from './departamentos/remove-departamentos/remove-departamentos.component';
import { ListDepartamentosComponent } from './departamentos/list-departamentos/list-departamentos.component';
import { CreateCiudadesComponent } from './ciudades/create-ciudades/create-ciudades.component';
import { EditCiudadesComponent } from './ciudades/edit-ciudades/edit-ciudades.component';
import { RemoveCiudadesComponent } from './ciudades/remove-ciudades/remove-ciudades.component';
import { ListCiudadesComponent } from './ciudades/list-ciudades/list-ciudades.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateParqueComponent,
    EditParqueComponent,
    RemoveParqueComponent,
    ListParqueComponent,
    CreateAtraccionesComponent,
    EditAtraccionesComponent,
    RemoveAtraccionesComponent,
    ListAtraccionesComponent,
    CreateZonasComponent,
    EditZonasComponent,
    RemoveZonasComponent,
    ListZonasComponent,
    CreatePuestosComponent,
    EditPuestosComponent,
    RemovePuestosComponent,
    ListPuestosComponent,
    CreatePlanesComponent,
    EditPlanesComponent,
    RemovePlanesComponent,
    ListPlanesComponent,
    CreateDepartamentosComponent,
    EditDepartamentosComponent,
    RemoveDepartamentosComponent,
    ListDepartamentosComponent,
    CreateCiudadesComponent,
    EditCiudadesComponent,
    RemoveCiudadesComponent,
    ListCiudadesComponent
  ],
  imports: [
    CommonModule,
    ParametersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ] 
})
export class ParametersModule { }
