import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApisInfo } from 'src/app/config/apis-info';
import { PlanModel } from 'src/app/models/plan.model';
import { PlanesService } from 'src/app/services/parameters/planes.service';

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
  ) { }

  ngOnInit(): void {
    this.BuildingForm();
  }

  BuildingForm(){
    this.fGroup = this.fb.group({
      id: ['',[]],
      name: ['',[Validators.required]],
      color: ['',[Validators.required]],
      valor: ['', [Validators.required]]
    });
  }
  
  SaveRecord() {
    if (this.fGroup.invalid) {
      alert('Faltan datos');
    } else {
      let model = new PlanModel();      
      model.nombre = this.fGroup.controls['name'].value;
      model.color = this.fGroup.controls['color'].value;
      model.valor = this.fGroup.controls['valor'].value;
      
      this.planService.saveRecord(model).subscribe({
        next: (data) => {
          alert('Registro almacenado correctamente con id ' + data.id);
        },
        error: (err) => {},
      });
    }
  }

}
