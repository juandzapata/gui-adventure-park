import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApisInfo } from 'src/app/config/apis-info';
import { CompraPlanModel } from 'src/app/models/compra-plan.model';
import { CompraModel } from 'src/app/models/compra.model';
import { PlanAtraccionModel } from 'src/app/models/plan-atraccion.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PlanAtraccionService } from 'src/app/services/parameters/plan-atraccion.service';
import { UsuarioLogicService } from 'src/app/services/parameters/usuario-logic.service';
import { CompraPlanService } from 'src/app/services/purchase/compra-plan.service';
import { CompraService } from 'src/app/services/purchase/compra.service';
export declare const OpenModal:any;
export declare const ShowToastMessage:any;

@Component({
  selector: 'app-views-planes-atraccion',
  templateUrl: './views-planes-atraccion.component.html',
  styleUrls: ['./views-planes-atraccion.component.css']
})
export class ViewsPlanesAtraccionComponent implements OnInit {

  recordList: PlanAtraccionModel[] = [];
  urlServer = ApisInfo.LOGIC_MS_URL;
  urlVideo = "";
  usuarioCorreo: string = '';
  usuarioId: number = 0;
  number = 1;
  fechaCompra: Date = new Date();
  precio: number = 0;
  compraId: number = 0;
  compras: CompraPlanModel[] = [];
  totalCompra: number = 0;
  constructor(
    private route: ActivatedRoute,
    private planesAtraccionesService: PlanAtraccionService,
    private compraService: CompraService,
    private compraPlanService: CompraPlanService,
    private router: Router,
    private usuariosService: UsuarioLogicService,
    private ls: LocalStorageService
    
  ) { }

  ngOnInit(): void {
    this.planesAtraccionesService.getRecordList().subscribe({
      next: (data) => {
        this.recordList = data;
        console.log(data);
        
      }
    });
  }

  ShowModal() {
    OpenModal();
  }

  addNumber() {
    this.number++;
  }

  removeNumber() {
    if (this.number == 0) {
      return;
    }
    this.number--;
  }

  buscarUsuarioId() {
    let userData = this.ls.GetSessionData();
    if (userData) {
      this.usuarioCorreo = userData.user.correo;
      this.usuariosService.buscarCorreo(this.usuarioCorreo).subscribe({
        next: (data) => {
          this.usuarioId = data.id;
          console.log(this.usuarioId);
          //this.crearCompra();
        }
      });
    } else {
      alert("Error obteniendo correo");
    }
  }

  confirmarCompra() {
    let modelCompraPlan = new CompraPlanModel();

        this.compraPlanService.saveRecord(modelCompraPlan).subscribe({
          next: (data) => {
            console.log("Compra plan creada");
            console.log(data);
          }
        });
        //this.router.navigate(['/parameters/list-puestos']);
  }

  agregarAlCarrito(cantidad:number, planAtraccionId:number, planNombre:string, precio:number) {
    let modelCompraPlan = new CompraPlanModel();

    modelCompraPlan.cantidad = cantidad;
    //modelCompraPlan.compraId = this.compraId;
    modelCompraPlan.planId = planAtraccionId;
    modelCompraPlan.total = cantidad * precio;
    modelCompraPlan.planNombre = planNombre;
    modelCompraPlan.precio = precio;

    this.compras.push(modelCompraPlan);
    console.log(this.compras);

    this.totalCompra = 0;
    this.compras.forEach(c => {
      this.totalCompra += c.total;
    });

    ShowToastMessage("¡Plan agregado al carrito!");
  }

  crearCompra(){
    let modelCompra = new CompraModel();
    let fechaStr = this.fechaCompra.toISOString();

    modelCompra.fecha = fechaStr;
    modelCompra.usuarioId = this.usuarioId;

    this.compraService.saveRecord(modelCompra).subscribe({
      next: (data) => {
        console.log("Registro almacenado éxitosamente");
        //console.log(data);
        this.compraId = data.id;

        this.compras.forEach(compra => {
          compra.compraId = this.compraId;
          this.compraPlanService.saveRecord(compra).subscribe({
            next: (data) => {
              console.log("Compra plan creada");         
              console.log(data);
            }
          });
        });

        this.router.navigate([`/purchase/create-compra/${this.compraId}`]);
    }
    });
  }

}
