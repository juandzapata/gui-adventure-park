import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { SingupComponent } from './singup/singup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


@NgModule({
  declarations: [
    SingupComponent,
    ResetPasswordComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule
  ]
})
export class SecurityModule { }
