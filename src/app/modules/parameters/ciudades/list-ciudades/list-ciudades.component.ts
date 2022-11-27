import { Component, OnInit } from '@angular/core';
import { ApisInfo } from 'src/app/config/apis-info';
import { CiudadModel } from 'src/app/models/ciudad.model';
import { CiudadesService } from 'src/app/services/parameters/ciudades.service';

@Component({
  selector: 'app-list-ciudades',
  templateUrl: './list-ciudades.component.html',
  styleUrls: ['./list-ciudades.component.css']
})
export class ListCiudadesComponent implements OnInit {


  // /ObtenerArchivo/{type}/{name}
  urlServer = ApisInfo.LOGIC_MS_URL;
  recordList: CiudadModel[] = [];


  constructor(
    private ciudadService: CiudadesService,

  ) { }

  ngOnInit(): void {
    this.ciudadService.getRecordList().subscribe({
      next:(data)=>{
        this.recordList = data;

      },
      error:(err)=>{
        alert("Error obteniendo la información");
      }
    });
  }

}
