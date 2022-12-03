import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CustomStyles } from 'src/app/config/custom.styles';
import { AtraccionesService } from 'src/app/services/parameters/atracciones.service';
declare const ShowToastMessage:any;

@Component({
  selector: 'app-remove-atracciones',
  templateUrl: './remove-atracciones.component.html',
  styleUrls: ['./remove-atracciones.component.css']
})
export class RemoveAtraccionesComponent implements OnInit {

  atraccionName: string = '';

  constructor(
    private route: ActivatedRoute,
    private atraccionService: AtraccionesService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.SearchRecord();
  }

  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.atraccionService.getRecordById(id).subscribe({
      next: (data) => {
        this.atraccionName = data.nombre;
      }, 
      error: (err) => {
        console.log(err);
      }
    })
  }

  RemoveRecord(){
    let id = this.route.snapshot.params['id'];
    this.atraccionService.removeRecord(id).subscribe({
      next: (data)=>{
        ShowToastMessage("¡Eliminado correctamente!", CustomStyles.success_toast_class);
        this.router.navigate(['/parameters/list-atracciones']);      
      },
      error: (err)=>{
        ShowToastMessage("Error eliminando", CustomStyles.error_toast_class);
      }
    });
  }
  
}
