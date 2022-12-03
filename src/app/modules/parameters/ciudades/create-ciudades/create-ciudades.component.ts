import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApisInfo } from 'src/app/config/apis-info';
import { CustomStyles } from 'src/app/config/custom.styles';
import { CiudadModel } from 'src/app/models/ciudad.model';
import { CiudadesService } from 'src/app/services/parameters/ciudades.service';

declare const ShowToastMessage:any;
@Component({
  selector: 'app-create-ciudades',
  templateUrl: './create-ciudades.component.html',
  styleUrls: ['./create-ciudades.component.css']
})
export class CreateCiudadesComponent implements OnInit {
  
  urlServer: string = ApisInfo.LOGIC_MS_URL;
  fGroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private ciudadService: CiudadesService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.BuildingForm();
  }

  BuildingForm(){
    this.fGroup = this.fb.group({
      id: ['',[]],
      name: ['',[Validators.required]],
      codigoPostal: ['',[Validators.required]]
    });
  }
  
  SaveRecord() {
    if (this.fGroup.invalid) {
      ShowToastMessage("Faltan datos", CustomStyles.error_toast_class);
    } else {
      let model = new CiudadModel();      
      model.nombre = this.fGroup.controls['name'].value;
      model.codigoPostal = this.fGroup.controls['codigoPostal'].value;
      
      this.ciudadService.saveRecord(model).subscribe({
        next: (data) => {
          ShowToastMessage("Registro almacenado éxitosamente", CustomStyles.success_toast_class);
          this.router.navigate(['/parameters/list-ciudades']);
        },
        error: (err) => {
          ShowToastMessage("Error almacenando el resgistro", CustomStyles.error_toast_class);
        },
      });
    }
  }
}
