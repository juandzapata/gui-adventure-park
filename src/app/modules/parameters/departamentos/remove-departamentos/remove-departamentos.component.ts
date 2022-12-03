import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomStyles } from 'src/app/config/custom.styles';
import { DepartamentosService } from 'src/app/services/parameters/departamentos.service';

declare const ShowToastMessage:any;

@Component({
  selector: 'app-remove-departamentos',
  templateUrl: './remove-departamentos.component.html',
  styleUrls: ['./remove-departamentos.component.css']
})
export class RemoveDepartamentosComponent implements OnInit {

  departamentoName: string = '';

  constructor(
    private route: ActivatedRoute,
    private departamentoService: DepartamentosService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.SearchRecord();
  }

  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.departamentoService.getRecordById(id).subscribe({
      next: (data) => {
        this.departamentoName = data.nombre;
      }, 
      error: (err) => {
        console.log(err);
      }
    })
  }

  RemoveRecord(){
    let id = this.route.snapshot.params['id'];
    this.departamentoService.removeRecord(id).subscribe({
      next: (data)=>{
        ShowToastMessage("¡Eliminado correctamente!", CustomStyles.success_toast_class);
        this.router.navigate(['/parameters/list-departamentos']);
      },
      error: (err)=>{
        ShowToastMessage("Error eliminando", CustomStyles.error_toast_class);
      }
    });
  }
}
