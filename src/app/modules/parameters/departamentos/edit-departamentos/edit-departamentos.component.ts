import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApisInfo } from 'src/app/config/apis-info';
import { CustomStyles } from 'src/app/config/custom.styles';
import { DepartamentoModel } from 'src/app/models/departamento.model';
import { DepartamentosService } from 'src/app/services/parameters/departamentos.service';

declare const ShowToastMessage:any;

@Component({
  selector: 'app-edit-departamentos',
  templateUrl: './edit-departamentos.component.html',
  styleUrls: ['./edit-departamentos.component.css']
})
export class EditDepartamentosComponent implements OnInit {
  urlServer: string = ApisInfo.LOGIC_MS_URL;
  fGroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder, 
    private departamentoService: DepartamentosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.BuildingForm();
    this.SearchRecord();
  }

  BuildingForm() {
    this.fGroup = this.fb.group({
      id: ['',[]],
      name: ['',[Validators.required]]
    });
    
  }

  get fg() {
    return this.fGroup.controls;
  }

  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.departamentoService.getRecordById(id).subscribe({
      next: (data) => {
        console.log(data);
        this.fGroup.controls["id"].setValue(data.id);
        this.fGroup.controls["name"].setValue(data.nombre);
      }, 
      error: (err) => {
        console.log(err);
      }
    })
  }

  EditarRecord() {
    if (this.fGroup.invalid) {
      ShowToastMessage("Faltan datos", CustomStyles.success_toast_class);
    } else {
      let model = new DepartamentoModel();      
      model.nombre = this.fGroup.controls['name'].value;
      model.id = this.fGroup.controls['id'].value;

      this.departamentoService.saveRecord(model).subscribe({
        next: (data) => {
          ShowToastMessage("Registro actualizado éxitosamente", CustomStyles.success_toast_class);
          this.router.navigate(['/parameters/list-departamentos']);
        },
        error: (err) => {},
      });
    }
  }


}

