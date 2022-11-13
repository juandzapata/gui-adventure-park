import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DefaultValues } from 'src/app/config/default-values';
import { SercurityService } from 'src/app/services/sercurity.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  fGroup: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private secService: SercurityService
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
          alert("Se ha cambiado la contraseña. Por favor verifique su bandeja de entrada")
        }else{
          alert("No se ha enviado la contraseña")
        }
      },
      error:(err) =>{
        alert("Error en el cambio de contraseña")
      }
    });
  }
}
