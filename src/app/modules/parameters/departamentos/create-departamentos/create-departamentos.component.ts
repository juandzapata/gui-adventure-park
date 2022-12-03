import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApisInfo } from 'src/app/config/apis-info';
import { CustomStyles } from 'src/app/config/custom.styles';
import { DepartamentoModel } from 'src/app/models/departamento.model';
import { DepartamentosService } from 'src/app/services/parameters/departamentos.service';

declare const ShowToastMessage:any;

@Component({
  selector: 'app-create-departamentos',
  templateUrl: './create-departamentos.component.html',
  styleUrls: ['./create-departamentos.component.css']
})
export class CreateDepartamentosComponent implements OnInit {
  urlServer: string = ApisInfo.LOGIC_MS_URL;
  fGroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder, 
    private departamentoService: DepartamentosService,
    private  router: Router
  ) { }

  ngOnInit(): void {
    this.BuildingForm();
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

  SaveRecord() {
    if (this.fGroup.invalid) {
      ShowToastMessage("Faltan datos", CustomStyles.error_toast_class);
    } else {
      let model = new DepartamentoModel();      
      model.nombre = this.fGroup.controls['name'].value;

      this.departamentoService.saveRecord(model).subscribe({
        next: (data) => {
          ShowToastMessage("Registro creado éxitosamente", CustomStyles.success_toast_class);
          this.router.navigate(['/parameters/list-departamentos']);
        },
        error: (err) => {},
      });
    }
  }


}
