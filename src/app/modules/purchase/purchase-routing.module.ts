
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from 'src/app/guards/authenticated.guard';
import { CreateCompraPlanComponent } from './compra-plan/create-compra-plan/create-compra-plan.component';
import { ListCompraPlanComponent } from './compra-plan/list-compra-plan/list-compra-plan.component';
import { CreateCompraComponent } from './compra/create-compra/create-compra.component';

 const routes: Routes = [
  {
    path:'create-compra/:idCompra',
    component:CreateCompraComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'create-compra-plan/:idCompra',
    component:CreateCompraPlanComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'list-compra-plan',
    component:ListCompraPlanComponent,
    canActivate: [AuthenticatedGuard]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
