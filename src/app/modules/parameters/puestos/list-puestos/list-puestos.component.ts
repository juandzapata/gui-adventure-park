import { Component, OnInit } from '@angular/core';
import { ApisInfo } from 'src/app/config/apis-info';
import { PuestoModel } from 'src/app/models/puesto.model';
import { PuestosService } from 'src/app/services/parameters/puestos.service';

@Component({
  selector: 'app-list-puestos',
  templateUrl: './list-puestos.component.html',
  styleUrls: ['./list-puestos.component.css']
})
export class ListPuestosComponent implements OnInit {

  // /ObtenerArchivo/{type}/{name}
  urlServer = ApisInfo.LOGIC_MS_URL;
  recordList: PuestoModel[] = [];


  constructor(
    private puestoService: PuestosService,

  ) { }

  ngOnInit(): void {
    this.puestoService.getRecordList().subscribe({
      next:(data)=>{
        this.recordList = data;

      },
      error:(err)=>{
        alert("Error obteniendo la información");
      }
    });
  }

}
