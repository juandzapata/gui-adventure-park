import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApisInfo } from 'src/app/config/apis-info';
import { UsuarioLogicService } from 'src/app/services/parameters/usuario-logic.service';
import { CompraService } from 'src/app/services/purchase/compra.service';
import { UserLogicModel } from 'src/app/models/user-logic-model';
import { CustomStyles } from 'src/app/config/custom.styles';
import { CompraModel } from 'src/app/models/compra.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';

declare const ShowToastMessage:any;

@Component({
  selector: 'app-create-compra',
  templateUrl: './create-compra.component.html',
  styleUrls: ['./create-compra.component.css']
})
export class CreateCompraComponent implements OnInit {

  urlServer: string = ApisInfo.LOGIC_MS_URL;
  uploadedImageLogo: string = '';
  uploadedImageMapa: string = '';
  isFileSelectedLogo: boolean = false;
  isFileSelectedMapa: boolean = false;

  fGroup: FormGroup = new FormGroup({});
  usuarioCorreo: string = '';
  usuarioId: number = 0;

  //fecha del momento de la compra
  fechaCompra: Date = new Date();
  
  constructor(
    private fb: FormBuilder, 
    private compraService: CompraService ,
    private router: Router,
    private usuariosService: UsuarioLogicService,
    private ls: LocalStorageService
    ) {}

  ngOnInit(): void {
    //this.BuildingForm();
    this.buscarUsuarioId();
    
  }

  /**
   *
   */
  BuildingForm() {
    this.fGroup = this.fb.group({
      id: ['', []]
    });
  }

  get fg() {
    return this.fGroup.controls;
  }

  SaveRecord() {
    if(this.fGroup.invalid) {
      ShowToastMessage("Faltan datos", CustomStyles.error_toast_class);
    } else {
      let model = new CompraModel();
      const fechaStr = this.fechaCompra.toISOString();
      model.fecha = fechaStr;
      model.usuarioId = this.usuarioId;

      this.compraService.saveRecord(model).subscribe({
        next: (data) => {
          ShowToastMessage("Registro almacenado éxitosamente", CustomStyles.success_toast_class);
          //this.router.navigate(['/parameters/list-puestos']);
        },
        error: (err) => {
          alert("Error creando compra");
        }
      });

    }
  }

  buscarUsuarioId() {
    let userData = this.ls.GetSessionData();
    if(userData){
      this.usuarioCorreo = userData.user.correo;
      this.usuariosService.buscarCorreo(this.usuarioCorreo).subscribe({
        next: (data) => {
          this.usuarioId = data.id;
          console.log(this.usuarioId);
        }
      })
    } else{
      alert("Error obteniendo correo");
    }
  }

}
