import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApisInfo } from 'src/app/config/apis-info';
import { AtraccionModel } from 'src/app/models/atraccion.model';
import { AtraccionesService } from 'src/app/services/parameters/atracciones.service';
import { SafePipe } from 'src/app/safe.pipe';

declare const OpenModal: any;

@Component({
  selector: 'app-views-atracciones',
  templateUrl: './views-atracciones.component.html',
  styleUrls: ['./views-atracciones.component.css']
})
export class ViewsAtraccionesComponent implements OnInit {

  idZona: number = this.route.snapshot.params["id"];
  recordList: AtraccionModel[] = [];
  urlServer = ApisInfo.LOGIC_MS_URL;
  urlVideo = "";

  constructor(
    private route: ActivatedRoute,
    private atraccionesServices: AtraccionesService
  ) { }

  ngOnInit(): void { 
    this.atraccionesServices.getAtraccionesZona(this.idZona).subscribe({
      next:(data)=>{
        this.recordList = data;

      },
      error:(err)=>{
        alert("Error obteniendo la información");
      }
    });
  }

  ShowModal(urlVideo: string){
    this.urlVideo = urlVideo;
    console.log(urlVideo);
    
    OpenModal();
  }


} 
