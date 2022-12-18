import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomStyles } from 'src/app/config/custom.styles';
import { PlanAtraccionService } from 'src/app/services/parameters/plan-atraccion.service';

export declare const ShowToastMessage:any;
@Component({
  selector: 'app-remove-plan-atraccion',
  templateUrl: './remove-plan-atraccion.component.html',
  styleUrls: ['./remove-plan-atraccion.component.css']
})
export class RemovePlanAtraccionComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private planAtraccion: PlanAtraccionService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.planAtraccion.getRecordById(id).subscribe({
      next: (data) => {
        //this.planAtraccion = data.nombre;
      }, 
      error: (err) => {
        console.log(err);
      }
    })
  }

  RemoveRecord(){
    let id = this.route.snapshot.params['id'];
    this.planAtraccion.removeRecord(id).subscribe({
      next: (data)=>{
        ShowToastMessage("¡Eliminado correctamente!", CustomStyles.success_toast_class);
        this.router.navigate(['/parameters/list-plan-atraccion']);        
      },
      error: (err)=>{
        ShowToastMessage("Error eliminando", CustomStyles.error_toast_class);
      }
    });
  }
}
