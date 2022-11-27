import { Component, OnInit } from '@angular/core';
import { ApisInfo } from 'src/app/config/apis-info';
import { DepartamentoModel } from 'src/app/models/departamento.model';
import { DepartamentosService } from 'src/app/services/parameters/departamentos.service';

@Component({
  selector: 'app-list-departamentos',
  templateUrl: './list-departamentos.component.html',
  styleUrls: ['./list-departamentos.component.css']
})
export class ListDepartamentosComponent implements OnInit {

  // /ObtenerArchivo/{type}/{name}
  urlServer = ApisInfo.LOGIC_MS_URL;
  recordList: DepartamentoModel[] = [];

  constructor(
    private departamentoService: DepartamentosService,

  ) { }

  ngOnInit(): void {
    this.departamentoService.getRecordList().subscribe({
      next:(data)=>{
        this.recordList = data;

      },
      error:(err)=>{
        alert("Error obteniendo la información");
      }
    });
  }


}
