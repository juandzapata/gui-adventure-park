import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomStyles } from 'src/app/config/custom.styles';
import { DefaultValues } from 'src/app/config/default-values';
import { SercurityService } from 'src/app/services/sercurity.service';

declare const ShowToastMessage:any;

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  fGroup: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private secService: SercurityService,
    private router: Router
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
  BuildingForm(){
    this.fGroup = this.fb.group({
      username: [DefaultValues.email, [Validators.required, Validators.email, Validators.minLength(5)]]
    });
  }

  /**
   * Ejecución de la funcionalidad del botón 'reset'
   */
  ResetPasswordAction(){
    let username = this.fGroup.controls["username"].value;
    this.secService.ResetPasswordRequest(username).subscribe({
      next:(data) => {
        if(data){
          ShowToastMessage("Hemos enviado un correo con tu nueva contraseña, ¡No la olvides esta vez!", CustomStyles.success_toast_class);
          this.router.navigate(['/security/singup']);
        }else{
          ShowToastMessage('No se pudo enviar la contraseña')
        }
      },
      error:(err) =>{
        ShowToastMessage('¡Oh no! Dirección de correo inválido');
      }
    });
  }

  get fg(){
    return this.fGroup.controls;
  }
}
