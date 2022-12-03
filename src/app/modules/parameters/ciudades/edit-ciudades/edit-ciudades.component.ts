import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApisInfo } from 'src/app/config/apis-info';
import { CustomStyles } from 'src/app/config/custom.styles';
import { CiudadModel } from 'src/app/models/ciudad.model';
import { CiudadesService } from 'src/app/services/parameters/ciudades.service';
import { DepartamentoModel } from 'src/app/models/departamento.model';
import { DepartamentosService } from 'src/app/services/parameters/departamentos.service';

declare const ShowToastMessage:any;

@Component({
  selector: 'app-edit-ciudades',
  templateUrl: './edit-ciudades.component.html',
  styleUrls: ['./edit-ciudades.component.css']
})
export class EditCiudadesComponent implements OnInit {
  
  urlServer: string = ApisInfo.LOGIC_MS_URL;
  fGroup: FormGroup = new FormGroup({});
  departamentos: DepartamentoModel[] = [];
  seleccionado = 0;

  constructor(
    private fb: FormBuilder,
    private ciudadService: CiudadesService,
    private router: Router,
    private route: ActivatedRoute,
    private departamentosService: DepartamentosService
  ) { }

  ngOnInit(): void {
    this.BuildingForm();
    this.LlenarListaCiudades();
    this.SearchRecord();
  }

  BuildingForm(){
    this.fGroup = this.fb.group({
      id: ['',[]],
      name: ['',[Validators.required]],
      codigoPostal: ['',[Validators.required]],
      seleccionado: ['',[Validators.required]]
    });
  }
  
  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.ciudadService.getRecordById(id).subscribe({
      next: (data) => {
        console.log(data);
        this.fGroup.controls["id"].setValue(data.id);
        this.fGroup.controls["name"].setValue(data.nombre);
        this.fGroup.controls["codigoPostal"].setValue(data.codigoPostal);
        this.fGroup.controls["seleccionado"].setValue(data.departamentoId);
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
      let model = new CiudadModel();      
      model.nombre = this.fGroup.controls['name'].value;
      model.codigoPostal = this.fGroup.controls['codigoPostal'].value;
      model.id = this.fGroup.controls['id'].value;
      model.departamentoId = this.seleccionado;
      
      this.ciudadService.editRecord(model).subscribe({
        next: (data) => {
          ShowToastMessage("Registro actualizado éxitosamente", CustomStyles.success_toast_class);
          this.router.navigate(['/parameters/list-ciudades']);
        },
        error: (err) => {},
      });
    }
  }

  LlenarListaCiudades(){
    this.departamentosService.getRecordList().subscribe({
      next: (data) =>{
        this.departamentos = data;
        console.log(data);
        
      }
    });
  }

  capturar() {
    this.seleccionado = parseInt(this.fGroup.controls["seleccionado"].value);
  }
}

