import { Component, OnInit } from '@angular/core';
import { ApisInfo } from 'src/app/config/apis-info';
import { ZonaModel } from 'src/app/models/zona.model';
import { ZonasService } from 'src/app/services/parameters/zonas.service';

@Component({
  selector: 'app-list-zonas',
  templateUrl: './list-zonas.component.html',
  styleUrls: ['./list-zonas.component.css']
})
export class ListZonasComponent implements OnInit {

  // /ObtenerArchivo/{type}/{name}
  urlServer = ApisInfo.LOGIC_MS_URL;
  recordList: ZonaModel[] = [];

  constructor(
    private zonaService: ZonasService,

  ) { }

  ngOnInit(): void {
    this.zonaService.getRecordList().subscribe({
      next:(data)=>{
        this.recordList = data;

      },
      error:(err)=>{
        alert("Error obteniendo la información");
      }
    });
  }

}
