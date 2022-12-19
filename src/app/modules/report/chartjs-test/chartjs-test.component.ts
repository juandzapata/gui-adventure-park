import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js/auto';
import { AtraccionModel } from 'src/app/models/atraccion.model';
import { AtraccionesService } from 'src/app/services/parameters/atracciones.service';

declare const firstReport:any;
declare const downloadChart:any;

@Component({
  selector: 'app-chartjs-test',
  templateUrl: './chartjs-test.component.html',
  styleUrls: ['./chartjs-test.component.css']
})
export class ChartjsTestComponent implements OnInit {

  recordList: AtraccionModel[] = [];
  estadosAtracciones: number[] = [0,0,0];

  constructor(
    private route: ActivatedRoute,
    private atraccionService: AtraccionesService
  ) { }

  ngOnInit(): void {
    this.atraccionService.getRecordList().subscribe({
      next:(data)=>{
        this.recordList = data;
        this.AtraccionesReport();
        this.report();
      },
      error:(err)=>{
        alert("Error obteniendo la información");
      }
    });
    
  }

  report(){
    const data = [
    { estado: 'Activa',  count: this.estadosAtracciones[0] },
    { estado: 'En Mantenimiento',  count: this.estadosAtracciones[1]},
    { estado: 'Inactiva',  count: this.estadosAtracciones[2]}
    ]
    firstReport(data);
  }

  AtraccionesReport(){
    for (let i = 0; i < this.recordList.length; i++) {
      if(this.recordList[i].estado == "Activa"){
        this.estadosAtracciones[0] += 1;
      }else if(this.recordList[i].estado == "En mantenimiento"){
        this.estadosAtracciones[1] += 1;
      }else{
        this.estadosAtracciones[2] += 1;
      }      
    }
  }

  Download(){
    downloadChart();
  }
}
