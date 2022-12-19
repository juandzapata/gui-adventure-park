import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApisInfo } from 'src/app/config/apis-info';
import { CustomStyles } from 'src/app/config/custom.styles';
import { PlanModel } from 'src/app/models/plan.model';
import { PlanesService } from 'src/app/services/parameters/planes.service';

declare const ShowToastMessage:any;

@Component({
  selector: 'app-create-planes',
  templateUrl: './create-planes.component.html',
  styleUrls: ['./create-planes.component.css']
})
export class CreatePlanesComponent implements OnInit {

  urlServer: string = ApisInfo.LOGIC_MS_URL;
  fGroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private planService: PlanesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.BuildingForm();
  }

  BuildingForm(){
    this.fGroup = this.fb.group({
      id: ['',[]],
      name: ['',[Validators.required]],
      color: ['',[Validators.required]],
      descripcion: ['',[Validators.required]],
      precio: ['',[Validators.required]]
    });
  }
  
  SaveRecord() {
    if (this.fGroup.invalid) {
      ShowToastMessage("Faltan datos", CustomStyles.error_toast_class);
    } else {
      let model = new PlanModel();      
      model.nombre = this.fGroup.controls['name'].value;
      model.color = this.fGroup.controls['color'].value;
      model.precio = this.fGroup.controls['precio'].value;
      model.descripcion = this.fGroup.controls['descripcion'].value;
      
      this.planService.saveRecord(model).subscribe({
        next: (data) => {
          ShowToastMessage("Registro creado éxitosamente", CustomStyles.success_toast_class);
          this.router.navigate(['/parameters/list-planes']);

        },
        error: (err) => {
          ShowToastMessage("Error creando el registro", CustomStyles.success_toast_class);
        },

      });
    }
  }

}
