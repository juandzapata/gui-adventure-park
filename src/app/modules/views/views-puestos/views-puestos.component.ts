import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApisInfo } from 'src/app/config/apis-info';
import { PuestoModel } from 'src/app/models/puesto.model';
import { PuestosService } from 'src/app/services/parameters/puestos.service';

@Component({
  selector: 'app-views-puestos',
  templateUrl: './views-puestos.component.html',
  styleUrls: ['./views-puestos.component.css']
})
export class ViewsPuestosComponent implements OnInit {

  idZona: number = this.route.snapshot.params["id"];
  recordList: PuestoModel[] = [];
  urlServer = ApisInfo.LOGIC_MS_URL;

  constructor(
    private route: ActivatedRoute,
    private puestosService: PuestosService
  ) { }

  ngOnInit(): void { 
    this.puestosService.getPuestosZona(this.idZona).subscribe({
      next:(data)=>{
        this.recordList = data;

      },
      error:(err)=>{
        alert("Error obteniendo la información");
      }
    });
  }

}
