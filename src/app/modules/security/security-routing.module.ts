import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SingupComponent } from './singup/singup.component';

const routes: Routes = [
  {
    path:'singup',
    component: SingupComponent
  },
  {
    path: 'forgot-password',
    component: ResetPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
