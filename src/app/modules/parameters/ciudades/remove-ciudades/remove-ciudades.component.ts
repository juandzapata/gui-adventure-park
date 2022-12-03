import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomStyles } from 'src/app/config/custom.styles';
import { CiudadesService } from 'src/app/services/parameters/ciudades.service';
declare const ShowToastMessage:any;

@Component({
  selector: 'app-remove-ciudades',
  templateUrl: './remove-ciudades.component.html',
  styleUrls: ['./remove-ciudades.component.css']
})
export class RemoveCiudadesComponent implements OnInit {

  ciudadName: string = '';

  constructor(
    private route: ActivatedRoute,
    private ciudadesService: CiudadesService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.SearchRecord();
  }

  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.ciudadesService.getRecordById(id).subscribe({
      next: (data) => {
        this.ciudadName = data.nombre;
      }, 
      error: (err) => {
        console.log(err);
      }
    })
  }

  RemoveRecord(){
    let id = this.route.snapshot.params['id'];
    this.ciudadesService.removeRecord(id).subscribe({
      next: (data)=>{
        ShowToastMessage("¡Eliminado correctamente!", CustomStyles.success_toast_class);
        this.router.navigate(['/parameters/list-ciudades']);        
      },
      error: (err)=>{
        ShowToastMessage("Error eliminando", CustomStyles.error_toast_class);
      }
    });
  }

}
