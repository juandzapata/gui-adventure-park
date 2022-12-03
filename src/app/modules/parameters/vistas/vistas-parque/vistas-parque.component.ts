import { Component, OnInit } from '@angular/core';
import { ApisInfo } from 'src/app/config/apis-info';
import { ParqueModel } from 'src/app/models/parque.model';
import { ParqueService } from 'src/app/services/parameters/parque.service';

@Component({
  selector: 'app-vistas-parque',
  templateUrl: './vistas-parque.component.html',
  styleUrls: ['./vistas-parque.component.css']
})
export class VistasParqueComponent implements OnInit {

  urlServer = ApisInfo.LOGIC_MS_URL;
  recordList: ParqueModel[] = [];


  constructor(
    private parqueService: ParqueService,

  ) { }

  ngOnInit(): void {
    this.parqueService.getRecordList().subscribe({
      next:(data)=>{
        this.recordList = data;

      },
      error:(err)=>{
        alert("Error obteniendo la información");
      }
    });
  }
}
