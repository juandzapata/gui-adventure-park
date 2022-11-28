import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApisInfo } from 'src/app/config/apis-info';
import { CiudadModel } from 'src/app/models/ciudad.model';
import { CiudadesService } from 'src/app/services/parameters/ciudades.service';

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
      alert('Faltan datos');
    } else {
      let model = new CiudadModel();      
      model.nombre = this.fGroup.controls['name'].value;
      model.codigoPostal = this.fGroup.controls['codigoPostal'].value;
      
      this.ciudadService.saveRecord(model).subscribe({
        next: (data) => {
          alert('Registro almacenado correctamente con id ' + data.id);
        },
        error: (err) => {},
      });
    }
  }
}
