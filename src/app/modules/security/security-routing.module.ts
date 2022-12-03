import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from 'src/app/guards/authenticated.guard';
import { UnauthenticatedGuard } from 'src/app/guards/unauthenticated.guard';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DobleFactorComponent } from './doble-factor/doble-factor.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterUserComponent } from './register-user/register-user.component';
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
  {
    path: 'register-user',
    component: RegisterUserComponent,
    canActivate: [UnauthenticatedGuard]
  },
  {
    path: 'doble-factor',
    component: DobleFactorComponent,
    canActivate: [UnauthenticatedGuard]
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
    canActivate: [AuthenticatedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
