import { Component, OnInit } from '@angular/core';
import { ApisInfo } from 'src/app/config/apis-info';
import { ParqueModel } from 'src/app/models/parque.model';
import { ParqueService } from 'src/app/services/parameters/parque.service';

@Component({
  selector: 'app-list-parque',
  templateUrl: './list-parque.component.html',
  styleUrls: ['./list-parque.component.css']
})
export class ListParqueComponent implements OnInit {

  // /ObtenerArchivo/{type}/{name}
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
