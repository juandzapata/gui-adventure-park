import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomStyles } from 'src/app/config/custom.styles';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { SercurityService } from 'src/app/services/sercurity.service';
declare const ShowToastMessage:any;

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  fGroup: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private secService: SercurityService,
    private router: Router,
    private lsService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.BuildingForm();
  }

  BuildingForm(){
    this.fGroup = this.fb.group({
      username: ['', [Validators.email, Validators.minLength(5), Validators.required]],
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]]       
    });
  }

  get fg() {
    return this.fGroup.controls;
  }

  ChangePasswordAction(){
    let username = this.fGroup.controls["username"].value;
    let oldPassword = this.fGroup.controls["oldPassword"].value;
    let newPassword = this.fGroup.controls["newPassword"].value;

    this.secService.ChangePasswordRequest(username, oldPassword, newPassword).subscribe({
        next: (data) => {
          if(data){
            ShowToastMessage("Tu contraseña ha sido modificada éxitosamente. ¡Revisa tu bandeja de entrada!", CustomStyles.success_toast_class);
            this.router.navigate(['/parameters/edit-usuario']);
          } else{
            alert("Error en el cambio");
          }
        },
        error: (err) => {
          alert("Error");
        }

    });
    

  }
}