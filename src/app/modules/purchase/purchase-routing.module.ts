
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from 'src/app/guards/authenticated.guard';
import { CreateCompraComponent } from './compra/create-compra/create-compra.component';

 const routes: Routes = [
  {
    path:'create-compra',
    component:CreateCompraComponent,
    canActivate: [AuthenticatedGuard]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
