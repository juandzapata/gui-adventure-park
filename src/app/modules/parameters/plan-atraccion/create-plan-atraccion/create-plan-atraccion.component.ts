import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  selector: 'app-create-plan-atraccion',
  templateUrl: './create-plan-atraccion.component.html',
  styleUrls: ['./create-plan-atraccion.component.css']
})
export class CreatePlanAtraccionComponent implements OnInit {

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
    private planAtraccionService: PlanAtraccionService

  ) { }

  ngOnInit(): void {
    this.BuildingForm();
    this.LlenarListaAtracciones();
    this.LlenarListaplanes();
  }

  BuildingForm(){
    this.fGroup = this.fb.group({
      id: ['',[]],
      seleccionadoA: ['',[Validators.required]],
      seleccionadoP: ['',[Validators.required]]
    });
  }
  
  SaveRecord() {
    if (this.fGroup.invalid) {
      ShowToastMessage("Faltan datos", CustomStyles.error_toast_class);
    } else {
      let model = new PlanAtraccionModel();      
      model.planId = this.seleccionadoP;
      model.atraccionId = this.seleccionadoA;
      
      this.planAtraccionService.saveRecord(model).subscribe({
        next: (data) => {
          ShowToastMessage("Registro almacenado éxitosamente", CustomStyles.success_toast_class);
          this.router.navigate(['/parameters/list-plan-atraccion']);
        },
        error: (err) => {
          ShowToastMessage("Error almacenando el resgistro", CustomStyles.error_toast_class);
        },
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

  get fg() {
    return this.fGroup.controls;
  }

}
