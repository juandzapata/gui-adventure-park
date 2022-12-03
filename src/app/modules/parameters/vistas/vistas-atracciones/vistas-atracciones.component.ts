import { Component, OnInit } from '@angular/core';
import { ApisInfo } from 'src/app/config/apis-info';
import { AtraccionModel } from 'src/app/models/atraccion.model';
import { AtraccionesService } from 'src/app/services/parameters/atracciones.service';

@Component({
  selector: 'app-vistas-atracciones',
  templateUrl: './vistas-atracciones.component.html',
  styleUrls: ['./vistas-atracciones.component.css']
})
export class VistasAtraccionesComponent implements OnInit {

  // /ObtenerArchivo/{type}/{name}
  urlServer = ApisInfo.LOGIC_MS_URL;
  recordList: AtraccionModel[] = [];


  constructor(
    private atraccionService: AtraccionesService,

  ) { }

  ngOnInit(): void {
    this.atraccionService.getRecordList().subscribe({
      next:(data)=>{
        this.recordList = data;

      },
      error:(err)=>{
        alert("Error obteniendo la información");
      }
    });

  }}
