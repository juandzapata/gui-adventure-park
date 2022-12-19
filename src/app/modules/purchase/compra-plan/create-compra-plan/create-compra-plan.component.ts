import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { P } from 'chart.js/dist/chunks/helpers.core';
import { CompraEmailModel } from 'src/app/models/compra-email.model';
import { CompraPlanModel } from 'src/app/models/compra-plan.model';
import { CompraService } from 'src/app/services/purchase/compra.service';
import { SercurityService } from 'src/app/services/sercurity.service';

export declare const ShowToastMessage:any;
@Component({
  selector: 'app-create-compra-plan',
  templateUrl: './create-compra-plan.component.html',
  styleUrls: ['./create-compra-plan.component.css']
})
export class CreateCompraPlanComponent implements OnInit {
  fGroup: FormGroup = new FormGroup({});
  codigo: string = '';
  idCompra: number = 0;
  comprasPlanes: CompraPlanModel[] = [];
  nombreUsuario: string = '';
  correoUsuario: string = '';
  cedulaUsuario: string = '';
  fechaCompra: string = '';
  totalCompra: number = 0;
   
  constructor(
    private fb: FormBuilder,
    private secService: SercurityService,
    private router: Router,
    private route: ActivatedRoute,
    private comprasService: CompraService
    
  ) { }

  ngOnInit(): void {
    this.BuildingForm();
    this.buscarCompra();
    this.buscarComprasPlanes();
  }

  BuildingForm(){
    this.fGroup = this.fb.group({
      codigo: ['', []]   
    });
  }

  get fg() {
    return this.fGroup.controls;
  }

  validarCodigo(){
    this.codigo = this.fGroup.controls['codigo'].value;
    this.secService.DobleFactorRequest(this.codigo).subscribe({
      next: (data) => {
        if(data) {
          ShowToastMessage("Tu compra ha sido confirmada. ¡Gracias por preferirnos!");
          this.enviarCorreoCompra();
          this.router.navigate(["/views/views-parque"]);
        } else{
          ShowToastMessage("¡Oh no! Código incorrecto.");
        }
      },
      error: (err) => {
        ShowToastMessage("¡Oh no! Código incorrecto.");
      }
    });
  }

  buscarCompra(){
    this.idCompra = this.route.snapshot.params['idCompra'];
    console.log(this.idCompra);
    
    this.comprasService.getRecordById(this.idCompra).subscribe({
      next: (data) => {
        console.log(data);
        this.nombreUsuario = `${data.usuario.nombre} ${data.usuario.apellidos}`;
        this.correoUsuario = data.usuario.email;
        this.cedulaUsuario = data.usuario.cedula;
        this.fechaCompra = data.fecha;
      }
    });
  }

  buscarComprasPlanes() {
    this.comprasService.getComprasPlanes(this.idCompra).subscribe({
      next: (data) => {
        this.comprasPlanes = data;
        
        this.comprasPlanes.forEach(compraPlan => {
          this.totalCompra += compraPlan.total;
        });
      }
    });
  }

  enviarCorreoCompra(){
    let model = new CompraEmailModel();

    model.nombreUsuario = this.nombreUsuario;
    model.correoUsuario = this.correoUsuario;
    model.cedulaUsuario = this.cedulaUsuario;
    model.fechaCompra = this.fechaCompra;
    model.idCompra =  this.idCompra.toString();
    model.totalCompra = this.totalCompra.toString();
    
    this.comprasService.enviarCorreoCompra(model).subscribe({
      next: (data) => {
        if(data) {
          ShowToastMessage("¡Revisa tu bandeja de entrada!");
        }
      }
    });


  }
}
