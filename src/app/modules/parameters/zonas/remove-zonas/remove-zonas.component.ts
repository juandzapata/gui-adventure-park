import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomStyles } from 'src/app/config/custom.styles';
import { ZonasService } from 'src/app/services/parameters/zonas.service';
declare const ShowToastMessage:any;


@Component({
  selector: 'app-remove-zonas',
  templateUrl: './remove-zonas.component.html',
  styleUrls: ['./remove-zonas.component.css']
})
export class RemoveZonasComponent implements OnInit {

  zonaName: string = '';

  constructor(
    private route: ActivatedRoute,
    private zonasService: ZonasService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.SearchRecord();
  }

  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.zonasService.getRecordById(id).subscribe({
      next: (data) => {
        this.zonaName = data.nombre;
      }, 
      error: (err) => {
        console.log(err);
      }
    })
  }

  RemoveRecord(){
    let id = this.route.snapshot.params['id'];
    this.zonasService.removeRecord(id).subscribe({
      next: (data)=>{
        ShowToastMessage("¡Eliminado correctamente!", CustomStyles.success_toast_class);
        this.router.navigate(['/parameters/list-zonas']);
      },
      error: (err)=>{
        ShowToastMessage("Error eliminando", CustomStyles.error_toast_class);
      }
    });
  }

}
