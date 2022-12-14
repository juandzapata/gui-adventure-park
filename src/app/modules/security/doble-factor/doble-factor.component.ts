import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomStyles } from 'src/app/config/custom.styles';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { SercurityService } from 'src/app/services/sercurity.service';
declare const ShowToastMessage:any;

@Component({
  selector: 'app-doble-factor',
  templateUrl: './doble-factor.component.html',
  styleUrls: ['./doble-factor.component.css']
})
export class DobleFactorComponent implements OnInit {
  fGroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private secService: SercurityService,
    private router: Router,
    private lsService: LocalStorageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.BuildingForm();
  }

  BuildingForm(){
    this.fGroup = this.fb.group({
      username: ['', []],
      codigo: ['', []]     
    });
  }

  get fg() {
    return this.fGroup.controls;
    
  }
  
  DobleFactor(){
    let codigo = this.fGroup.controls['codigo'].value;
    this.secService.DobleFactorRequest(codigo).subscribe({
      next: (data) => {
        if(data){
          //alert("Codigo correcto, token recibido");
          this.router.navigate(['/home']);
          ShowToastMessage("Bienvenido, ¡te extrañamos!", CustomStyles.success_toast_class);

          data.user.isLogged = true;
          this.lsService.SaveUserData(data);
        } else {
          ShowToastMessage("Código incorrecto", CustomStyles.error_toast_class);
        }
      },
      error: (err) => {
        console.log(err);
        
      }
    })
  }

  enviarSMS() {
    let username = this.route.snapshot.params["username"];
    console.log(this.fGroup.controls['username'].value);
    
    console.log(username + "aqui");
    
    this.secService.enviarSMS(username).subscribe({
      next: (data) => {
        if(data){
          ShowToastMessage("Código enviado. ¡Revisa tus mensajes!", CustomStyles.success_toast_class);
        } else {
          ShowToastMessage("Error al enviar el mensaje", CustomStyles.error_toast_class);
        }
      }
    });
  }
}