import { Component, OnInit } from '@angular/core';
import { ApisInfo } from 'src/app/config/apis-info';
import { ParqueModel } from 'src/app/models/parque.model';
import { ParqueService } from 'src/app/services/parameters/parque.service';

declare const OpenModal: any;

@Component({
  selector: 'app-views-parques',
  templateUrl: './views-parques.component.html',
  styleUrls: ['./views-parques.component.css']
})
export class ViewsParquesComponent implements OnInit {

  // /ObtenerArchivo/{type}/{name}
  urlServer = ApisInfo.LOGIC_MS_URL;
  recordList: ParqueModel[] = [];
  urlImage: string = '';


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

  ShowModal(urlImage: string){
    this.urlImage = urlImage;
    OpenModal();
  }

}
