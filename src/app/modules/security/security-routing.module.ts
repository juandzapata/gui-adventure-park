import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from 'src/app/guards/authenticated.guard';
import { UnauthenticatedGuard } from 'src/app/guards/unauthenticated.guard';
import { LogoutComponent } from './logout/logout.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SingupComponent } from './singup/singup.component';

const routes: Routes = [
  {
    path:'singup',
    component: SingupComponent,
    canActivate: [UnauthenticatedGuard]
  },
  {
    path: 'forgot-password',
    component: ResetPasswordComponent,
    canActivate: [UnauthenticatedGuard]
  },
  {
    path:'logout',
    component: LogoutComponent,
    canActivate: [AuthenticatedGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
