import { Component, OnInit } from '@angular/core';
import { ApisInfo } from 'src/app/config/apis-info';
import { PlanModel } from 'src/app/models/plan.model';
import { PlanesService } from 'src/app/services/parameters/planes.service';

@Component({
  selector: 'app-list-planes',
  templateUrl: './list-planes.component.html',
  styleUrls: ['./list-planes.component.css']
})
export class ListPlanesComponent implements OnInit {

  
  // /ObtenerArchivo/{type}/{name}
  urlServer = ApisInfo.LOGIC_MS_URL;
  recordList: PlanModel[] = [];


  constructor(
    private planService: PlanesService,

  ) { }

  ngOnInit(): void {
    this.planService.getRecordList().subscribe({
      next:(data)=>{
        this.recordList = data;

      },
      error:(err)=>{
        alert("Error obteniendo la información");
      }
    });
  }

}
