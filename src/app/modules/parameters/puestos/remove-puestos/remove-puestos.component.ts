import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomStyles } from 'src/app/config/custom.styles';
import { PuestosService } from 'src/app/services/parameters/puestos.service';

declare const ShowToastMessage:any;

@Component({
  selector: 'app-remove-puestos',
  templateUrl: './remove-puestos.component.html',
  styleUrls: ['./remove-puestos.component.css']
})
export class RemovePuestosComponent implements OnInit {

  puestoName: string = '';

  constructor(
    private route: ActivatedRoute,
    private puestoService: PuestosService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.SearchRecord();
  }

  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.puestoService.getRecordById(id).subscribe({
      next: (data) => {
        this.puestoName = data.nombre;
      }, 
      error: (err) => {
        console.log(err);
      }
    })
  }

  RemoveRecord(){
    let id = this.route.snapshot.params['id'];
    this.puestoService.removeRecord(id).subscribe({
      next: (data)=>{
        ShowToastMessage("¡Eliminado correctamente!", CustomStyles.success_toast_class);
        this.router.navigate(['/parameters/list-puestos']);        
      },
      error: (err)=>{
        ShowToastMessage("Error eliminando", CustomStyles.error_toast_class);
      }
    });
  }
}
