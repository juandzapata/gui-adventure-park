import { Component, OnInit } from '@angular/core';
import { ApisInfo } from 'src/app/config/apis-info';
import { CustomStyles } from 'src/app/config/custom.styles';
import { PlanAtraccionModel } from 'src/app/models/plan-atraccion.model';
import { PlanAtraccionService } from 'src/app/services/parameters/plan-atraccion.service';

export declare const OpenModal:any;
@Component({
  selector: 'app-list-plan-atraccion',
  templateUrl: './list-plan-atraccion.component.html',
  styleUrls: ['./list-plan-atraccion.component.css']
})
export class ListPlanAtraccionComponent implements OnInit {

  urlServer = ApisInfo.LOGIC_MS_URL;
  recordList: PlanAtraccionModel[] = [];
  constructor(
    private planAtraccionService: PlanAtraccionService,
  ) { }

  ngOnInit(): void {
    this.planAtraccionService.getRecordList().subscribe({
      next:(data) => {
        this.recordList = data;
      },
      error:(err)=>{
        alert("Error obteniendo la información");
      }
    });
  }
  }


