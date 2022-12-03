import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApisInfo } from 'src/app/config/apis-info';
import { CustomStyles } from 'src/app/config/custom.styles';
import { PlanModel } from 'src/app/models/plan.model';
import { PlanesService } from 'src/app/services/parameters/planes.service';

declare const ShowToastMessage:any;
@Component({
  selector: 'app-edit-planes',
  templateUrl: './edit-planes.component.html',
  styleUrls: ['./edit-planes.component.css']
})
export class EditPlanesComponent implements OnInit {

  urlServer: string = ApisInfo.LOGIC_MS_URL;
  fGroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private planService: PlanesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.BuildingForm();
    this.SearchRecord();
  }

  BuildingForm(){
    this.fGroup = this.fb.group({
      id: ['',[]],
      name: ['',[Validators.required]],
      color: ['',[Validators.required]],
      valor: ['', [Validators.required]]
    });
  }

  
  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.planService.getRecordById(id).subscribe({
      next: (data) => {
        console.log(data);
        this.fGroup.controls["id"].setValue(data.id);
        this.fGroup.controls["name"].setValue(data.nombre);
        this.fGroup.controls["valor"].setValue(data.valor);
        this.fGroup.controls["color"].setValue(data.color);
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
      let model = new PlanModel();      
      model.nombre = this.fGroup.controls['name'].value;
      model.color = this.fGroup.controls['color'].value;
      model.valor = this.fGroup.controls['valor'].value;
      model.id = this.fGroup.controls['id'].value;
      
      this.planService.editRecord(model).subscribe({
        next: (data) => {
          ShowToastMessage("Registro actualizado éxitosamente", CustomStyles.success_toast_class);
        },
        error: (err) => {},
      });
    }
  }

}
