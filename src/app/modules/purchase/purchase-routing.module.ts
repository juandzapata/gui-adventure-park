
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from 'src/app/guards/authenticated.guard';
import { CreateCompraPlanComponent } from './compra-plan/create-compra-plan/create-compra-plan.component';
import { CreateCompraComponent } from './compra/create-compra/create-compra.component';

 const routes: Routes = [
  {
    path:'create-compra/:idCompra',
    component:CreateCompraComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'create-compra-plan',
    component:CreateCompraPlanComponent,
    canActivate: [AuthenticatedGuard]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
