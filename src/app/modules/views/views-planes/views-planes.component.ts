import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApisInfo } from 'src/app/config/apis-info';
import { PlanAtraccionModel } from 'src/app/models/plan-atraccion.model';
import { PlanAtraccionService } from 'src/app/services/parameters/plan-atraccion.service';

export declare const OpenModal: any;

@Component({
  selector: 'app-views-planes',
  templateUrl: './views-planes.component.html',
  styleUrls: ['./views-planes.component.css']
})
export class ViewsPlanesComponent implements OnInit {

  idAtraccion: number = this.route.snapshot.params["id"];
  recordList: PlanAtraccionModel[] = [];
  urlServer = ApisInfo.LOGIC_MS_URL;
  urlVideo = "";
  number = 0;

  constructor(
    private route: ActivatedRoute,
    private planesAtraccionesServices: PlanAtraccionService
  ) { }

  ngOnInit(): void { 
    this.planesAtraccionesServices.getPlanesAtracciones(this.idAtraccion).subscribe({
      next:(data)=>{
        this.recordList = data;
      },
      error:(err)=>{
        alert("Error obteniendo la información");
      }
    });
  }

  ShowModal(){    
    OpenModal();
  }

  addNumber(){
    this.number++;
  }

  removeNumber(){
    if(this.number == 0){
      return;
    }
    this.number--;
  }
}
