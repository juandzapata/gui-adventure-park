import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApisInfo } from 'src/app/config/apis-info';
import { ZonaModel } from 'src/app/models/zona.model';
import { ZonasService } from 'src/app/services/parameters/zonas.service';

@Component({
  selector: 'app-vistas-zonas',
  templateUrl: './vistas-zonas.component.html',
  styleUrls: ['./vistas-zonas.component.css']
})
export class VistasZonasComponent implements OnInit {

  // /ObtenerArchivo/{type}/{name}
  urlServer = ApisInfo.LOGIC_MS_URL;
  recordList: ZonaModel[] = [];
  fGroup: FormGroup = new FormGroup({});

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
