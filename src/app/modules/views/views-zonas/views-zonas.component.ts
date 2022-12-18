import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApisInfo } from 'src/app/config/apis-info';
import { ZonaModel } from 'src/app/models/zona.model';
import { ZonasService } from 'src/app/services/parameters/zonas.service';
declare const ShowSlider:any;


@Component({
  selector: 'app-views-zonas',
  templateUrl: './views-zonas.component.html',
  styleUrls: ['./views-zonas.component.css']
})
export class ViewsZonasComponent implements OnInit {
  idParque: number = this.route.snapshot.params["id"];
  recordList: ZonaModel[] = [];
  urlServer = ApisInfo.LOGIC_MS_URL;
  slideEnd = false;

  constructor(
    private route: ActivatedRoute,
    private zonaService: ZonasService
  ) { }

  ngOnInit(): void {
    ShowSlider();    
    this.zonaService.getZonasParque(this.idParque).subscribe({
      next:(data)=>{
        this.recordList = data;

      },
      error:(err)=>{
        alert("Error obteniendo la información");
      }
    });
  }

}
