import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { SingupComponent } from './singup/singup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { DobleFactorComponent } from './doble-factor/doble-factor.component';


@NgModule({
  declarations: [
    SingupComponent,
    ResetPasswordComponent,
    ChangePasswordComponent,
    LogoutComponent,
    RegisterUserComponent,
    DobleFactorComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SecurityModule { }
