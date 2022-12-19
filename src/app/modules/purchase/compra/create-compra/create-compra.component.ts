import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApisInfo } from 'src/app/config/apis-info';
import { UsuarioLogicService } from 'src/app/services/parameters/usuario-logic.service';
import { CompraService } from 'src/app/services/purchase/compra.service';
import { UserLogicModel } from 'src/app/models/user-logic-model';
import { CustomStyles } from 'src/app/config/custom.styles';
import { CompraModel } from 'src/app/models/compra.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { CompraPlanModel } from 'src/app/models/compra-plan.model';
import { CompraPlanService } from 'src/app/services/purchase/compra-plan.service';
import { UsuarioSecurityService } from 'src/app/services/parameters/usuario-security.service';
import { SercurityService } from 'src/app/services/sercurity.service';

declare const ShowToastMessage:any;

@Component({
  selector: 'app-create-compra',
  templateUrl: './create-compra.component.html',
  styleUrls: ['./create-compra.component.css']
})
export class CreateCompraComponent implements OnInit {

  urlServer: string = ApisInfo.LOGIC_MS_URL;
  fGroup: FormGroup = new FormGroup({});
  usuarioCorreo: string = '';
  usuarioId: number = 0;
  comprasPlanes: CompraPlanModel[] = [];



  constructor(
    private fb: FormBuilder, 
    private compraService: CompraService ,
    private router: Router,
    private usuariosService: UsuarioLogicService,
    private ls: LocalStorageService,
    private route: ActivatedRoute,
    private comprasPlanesService: CompraPlanService,
    private usuarioSecService: UsuarioSecurityService,
    private secService: SercurityService
    ) {}

  ngOnInit(): void {
    this.BuildingForm();
    this.buscarUsuarioId();
  }

  /**
   *
   */
  BuildingForm() {
    this.fGroup = this.fb.group({
      tarjeta: ['', [Validators.required]],
      titular: ['', [Validators.required]],
      CVV: ['', [Validators.required]],
      expiracion: ['', [Validators.required]],
    });
  }

  get fg() {
    return this.fGroup.controls;
  }

  RemoveCompras() {
    let idCompra = this.route.snapshot.params["idCompra"];
    this.compraService.getComprasPlanes(idCompra).subscribe({
      next: (data) => {
        this.comprasPlanes = data;
        //console.log(data);

        this.comprasPlanes.forEach(compraPlan => {
          this.comprasPlanesService.removeRecord(compraPlan.id).subscribe({
            next: (data) => {
              console.log("compra plan" + compraPlan.id + "eliminada");             
            }
          });
        });

        this.compraService.removeRecord(idCompra).subscribe({
          next: (data) => {
            console.log("Compra eliminada.");
            ShowToastMessage("Tu compra ha sido cancelada éxitosamente")
            this.router.navigate(["/views/views-parque"]);            
          }
        });
      }
    });

  }

  buscarUsuarioId() {
    let userData = this.ls.GetSessionData();
    if(userData){
      this.usuarioCorreo = userData.user.correo;
      this.usuariosService.buscarCorreo(this.usuarioCorreo).subscribe({
        next: (data) => {
          this.usuarioId = data.id;
          this.usuarioCorreo = data.email;
          //console.log(this.usuarioId);
        }
      })
    } else{
      alert("Error obteniendo correo");
    }
  }

  generarCodigo(){
    this.secService.generateCode(this.usuarioCorreo).subscribe({
      next: (data) => {
        console.log(data);
        if(data) {
          ShowToastMessage("¡Código enviado! Revisa tus mensajes.");
          this.router.navigate(["/purchase/create-compra-plan"]);
        }
      }
    });
  }

}
