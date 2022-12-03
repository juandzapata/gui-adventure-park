import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomStyles } from 'src/app/config/custom.styles';
import { PlanesService } from 'src/app/services/parameters/planes.service';
declare const ShowToastMessage:any;


@Component({
  selector: 'app-remove-planes',
  templateUrl: './remove-planes.component.html',
  styleUrls: ['./remove-planes.component.css']
})
export class RemovePlanesComponent implements OnInit {

  planName: string = '';

  constructor(
    private route: ActivatedRoute,
    private planesService: PlanesService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.SearchRecord();
  }

  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.planesService.getRecordById(id).subscribe({
      next: (data) => {
        this.planName = data.nombre;
      }, 
      error: (err) => {
        console.log(err);
      }
    })
  }

  RemoveRecord(){
    let id = this.route.snapshot.params['id'];
    this.planesService.removeRecord(id).subscribe({
      next: (data)=>{
        ShowToastMessage("¡Eliminado correctamente!", CustomStyles.success_toast_class);
        this.router.navigate(['/parameters/list-planes']);        
      },
      error: (err)=>{
        ShowToastMessage("Error eliminando", CustomStyles.error_toast_class);
      }
    });
  }
  
}
