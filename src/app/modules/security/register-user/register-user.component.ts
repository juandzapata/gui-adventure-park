import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { mode } from 'crypto-js';
import { ApisInfo } from 'src/app/config/apis-info';
import { CustomStyles } from 'src/app/config/custom.styles';
import { DefaultValues } from 'src/app/config/default-values';
import { UserLogicModel } from 'src/app/models/user-logic-model';
import { UserSecurityModel } from 'src/app/models/user-security.model';
import { UserModel } from 'src/app/models/user.model';
import { UsuarioLogicService } from 'src/app/services/parameters/usuario-logic.service';
import { UsuarioSecurityService } from 'src/app/services/parameters/usuario-security.service';
import { UsuariosService } from 'src/app/services/parameters/usuarios.service';

declare const ShowToastMessage:any;

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  
  urlLogicServer: string = ApisInfo.LOGIC_MS_URL;
  urlSecurityServer: string = ApisInfo.SEC_MS_URL;
  rolVisit: string = '6371d531ec6ee399607ab929';

  fGroup: FormGroup = new FormGroup({});
  fGroup2: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder, 
    private usuariosSecurityService: UsuarioSecurityService,
    private usuariosLogicService: UsuarioLogicService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.BuildingForm();
  }

  BuildingForm2(){
    this.fGroup2 = this.fb.group({
      id: ['', []],
      correo: [
        '', [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      celular: ['', [Validators.required]],
    });
  }
  /**
   *
   */
  BuildingForm() {
    this.fGroup = this.fb.group({
      id: ['', []],
      correo: [
        '', [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      nombre: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      estatura: ['', [Validators.required]],
      cedula: ['', [Validators.required]],
      edad: ['', [Validators.required]],
      celular: ['',[]],
      rolId: ['',[]],
      clave: ['',[]]
    });
  }

  get fg() {
    return this.fGroup.controls;
  }

  SaveLogicRecord() {
    if (this.fGroup.invalid) {
      alert('Faltan datos - Usuario Logica');
    } else {
      let model = new UserLogicModel();
      model.nombre = this.fGroup.controls['nombre'].value;
      model.apellidos = this.fGroup.controls['apellidos'].value;
      model.cedula = this.fGroup.controls['cedula'].value;
      model.estatura = this.fGroup.controls['estatura'].value;
      model.email = this.fGroup.controls['correo'].value;
      model.edad = this.fGroup.controls['edad'].value;      

      this.usuariosLogicService.saveRecord(model).subscribe({
        next: (data) => {
          ShowToastMessage("¡Ya eres parte de la familia Adventure Park!", CustomStyles.success_toast_class);
          this.SaveSecurityRecord();
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  SaveSecurityRecord() {
    if (this.fGroup.invalid) {
      alert('Faltan datos - Usuario Seguridad');
    } else {
      let model = new UserSecurityModel();    
      model.nombres = `${this.fGroup.controls['nombre'].value} ${this.fGroup.controls['apellidos'].value}`;
      model.apellidos = this.fGroup.controls['apellidos'].value; 
      model.correo = this.fGroup.controls['correo'].value;
      model.celular = this.fGroup.controls['celular'].value;
      model.rolId = this.rolVisit;

      this.usuariosSecurityService.saveRecord(model).subscribe({
        next: (data) => {
          this.router.navigate(['/security/singup']);
        },
        error: (err) => {
          ShowToastMessage("Error", CustomStyles.error_toast_class);
        },
      });
    }
  }
}
