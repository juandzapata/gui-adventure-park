import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApisInfo } from 'src/app/config/apis-info';
import { DepartamentoModel } from 'src/app/models/departamento.model';
import { DepartamentosService } from 'src/app/services/parameters/departamentos.service';

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
      alert('Faltan datos');
    } else {
      let model = new DepartamentoModel();      
      model.nombre = this.fGroup.controls['name'].value;

      this.departamentoService.saveRecord(model).subscribe({
        next: (data) => {
          alert('Registro almacenado correctamente con id ' + data.id);
        },
        error: (err) => {},
      });
    }
  }


}
