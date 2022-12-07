import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomStyles } from 'src/app/config/custom.styles';
import { DefaultValues } from 'src/app/config/default-values';
import { LoggedUserModel } from 'src/app/models/logged-user.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { SercurityService } from 'src/app/services/sercurity.service';

declare const ShowToastMessage:any;
var MD5 = require('crypto-js/md5');

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css'],
})
export class SingupComponent implements OnInit {
  fGroup: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private secService: SercurityService,
    private router: Router,
    private lsServices: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.BuildingForm();
    /*setTimeout(() => {
      this.fGroup.controls["username"].setValue("HolaMundo")
    }, 5000);*/ //Prueba función de reactividad. - Modifica el epacio de correo a los 5 segundos -
  }

  /**
   * Construcción del formulario con los campos del mismo
   */
  BuildingForm() {
    this.fGroup = this.fb.group({
      username: [
        DefaultValues.email,
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      password: [DefaultValues.password, [Validators.required]],
    });
  }

  /**
   * Ejecución de la funcionalidad del botón 'ingresar'
   */
  LoginAction() {
    let username = this.fGroup.controls['username'].value;
    let password = this.fGroup.controls['password'].value;
    //Enviar la contraseña cifrada al backend
    let cryptoPassword = MD5(password).toString();
    console.log(cryptoPassword);
    this.secService.LoginRequest(username, cryptoPassword).subscribe({
      next: (data) => {
        console.log(data);
        
        if(data) {
          this.router.navigate([`/security/doble-factor/${username}`]);
        } else {
          alert("error, contraseña incorrecta");
        }},
        error: (err) => {
        alert("error, contraseña incorrecta");
            }
          });
        }
              
  get fg() {
    return this.fGroup.controls;
  }
}
