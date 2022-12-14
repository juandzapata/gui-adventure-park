import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { RemoveCompraComponent } from './compra/remove-compra/remove-compra.component';
import { EditCompraComponent } from './compra/edit-compra/edit-compra.component';
import { ListCompraComponent } from './compra/list-compra/list-compra.component';
import { ListCompraPlanComponent } from './compra-plan/list-compra-plan/list-compra-plan.component';
import { RemoveCompraPlanComponent } from './compra-plan/remove-compra-plan/remove-compra-plan.component';
import { EditCompraPlanComponent } from './compra-plan/edit-compra-plan/edit-compra-plan.component';
import { CreateCompraPlanComponent } from './compra-plan/create-compra-plan/create-compra-plan.component';
import { CreateCompraComponent } from './compra/create-compra/create-compra.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RemoveCompraComponent,
    CreateCompraComponent,
    EditCompraComponent,
    ListCompraComponent,
    ListCompraPlanComponent,
    RemoveCompraPlanComponent,
    EditCompraPlanComponent,
    CreateCompraPlanComponent
  ],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PurchaseModule { }
