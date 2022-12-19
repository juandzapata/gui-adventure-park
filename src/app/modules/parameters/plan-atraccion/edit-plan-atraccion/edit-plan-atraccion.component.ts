import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApisInfo } from 'src/app/config/apis-info';
import { CustomStyles } from 'src/app/config/custom.styles';
import { AtraccionModel } from 'src/app/models/atraccion.model';
import { PlanAtraccionModel } from 'src/app/models/plan-atraccion.model';
import { PlanModel } from 'src/app/models/plan.model';
import { AtraccionesService } from 'src/app/services/parameters/atracciones.service';
import { PlanAtraccionService } from 'src/app/services/parameters/plan-atraccion.service';
import { PlanesService } from 'src/app/services/parameters/planes.service';

export declare const ShowToastMessage:any;

@Component({
  selector: 'app-edit-plan-atraccion',
  templateUrl: './edit-plan-atraccion.component.html',
  styleUrls: ['./edit-plan-atraccion.component.css']
})
export class EditPlanAtraccionComponent implements OnInit {

  urlServer: string = ApisInfo.LOGIC_MS_URL;
  fGroup: FormGroup = new FormGroup({});
  atracciones: AtraccionModel[] = [];
  planes: PlanModel[] = [];
  seleccionadoA = 0;
  seleccionadoP = 0;

  constructor(
    private fb: FormBuilder,
    private atraccionesService: AtraccionesService,
    private planesService: PlanesService,
    private router: Router,
    private planAtraccionService: PlanAtraccionService,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.BuildingForm();
    this.SearchRecord();
    this.LlenarListaAtracciones();
    this.LlenarListaplanes();
  }

  BuildingForm(){
    this.fGroup = this.fb.group({
      id: ['',[]],
      seleccionadoA: ['',[]],
      seleccionadoP: ['',[]]
    });
  }

  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    console.log(id);
    
    this.planAtraccionService.getRecordById(id).subscribe({
      next: (data) => {
        console.log(data);
        this.fGroup.controls["id"].setValue(data.id);
        this.fGroup.controls["seleccionadoP"].setValue(data.planId);
        this.fGroup.controls["seleccionadoA"].setValue(data.atraccionId);
        this.seleccionadoA = this.fGroup.controls["seleccionadoA"].value;
        this.seleccionadoP = this.fGroup.controls["seleccionadoP"].value;
        

      }, 
      error: (err) => {
        console.log(err);
      }
    })
  }

  EditarRecord() {
    if (this.fGroup.invalid) {
      ShowToastMessage("Faltan datos", CustomStyles.error_toast_class);
    } else {
      let model = new PlanAtraccionModel();     
      model.id = this.fGroup.controls['id'].value;
      console.log(model.id);
      
      model.planId = this.seleccionadoP;
      model.atraccionId = this.seleccionadoA;
      //console.log(model);
      
      this.planAtraccionService.editRecord(model).subscribe({
        next: (data) => {
          ShowToastMessage("Registro actualizado éxitosamente", CustomStyles.success_toast_class);

          //Fecha para compra!!!!!
          // const fechaActual = new Date();
          // console.log(fechaActual);
          // const fechaStr =  `${fechaActual.toLocaleDateString()} ${fechaActual.toLocaleTimeString()} `
          // console.log(fechaStr);

          this.router.navigate(['/parameters/list-plan-atraccion']);
        },
        error: (err) => {},
      });
    }
  }

  LlenarListaAtracciones(){
    this.atraccionesService.getRecordList().subscribe({
      next: (data) =>{
        this.atracciones = data;
        //console.log(data);
        
      }
    });
  }

  LlenarListaplanes(){
    this.planesService.getRecordList().subscribe({
      next: (data) =>{
        this.planes = data;
        //console.log(data);
        
      }
    });
  }

  capturarA() {
    this.seleccionadoA = parseInt(this.fGroup.controls["seleccionadoA"].value);
  }

  capturarP(){
    this.seleccionadoP = parseInt(this.fGroup.controls["seleccionadoP"].value);
  }
}
