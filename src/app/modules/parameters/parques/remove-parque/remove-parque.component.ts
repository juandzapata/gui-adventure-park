import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomStyles } from 'src/app/config/custom.styles';
import { ParqueService } from 'src/app/services/parameters/parque.service';
declare const ShowToastMessage:any;

@Component({
  selector: 'app-remove-parque',
  templateUrl: './remove-parque.component.html',
  styleUrls: ['./remove-parque.component.css']
})
export class RemoveParqueComponent implements OnInit {

  parqueName: string = '';

  constructor(
    private route: ActivatedRoute,
    private parqueService: ParqueService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.SearchRecord();
  }

  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.parqueService.getRecordById(id).subscribe({
      next: (data) => {
        this.parqueName = data.nombre;
      }, 
      error: (err) => {
        console.log(err);
      }
    })
  }

  RemoveRecord(){
    let id = this.route.snapshot.params['id'];
    this.parqueService.removeRecord(id).subscribe({
      next: (data)=>{
        ShowToastMessage("¡Eliminado correctamente!", CustomStyles.success_toast_class);
        this.router.navigate(['/parameters/list-parque']);        
      },
      error: (err)=>{
        ShowToastMessage("Error eliminando", CustomStyles.error_toast_class);
      }
    });
  }


}
