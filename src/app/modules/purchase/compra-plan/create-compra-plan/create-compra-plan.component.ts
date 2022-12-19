import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SercurityService } from 'src/app/services/sercurity.service';

export declare const ShowToastMessage:any;
@Component({
  selector: 'app-create-compra-plan',
  templateUrl: './create-compra-plan.component.html',
  styleUrls: ['./create-compra-plan.component.css']
})
export class CreateCompraPlanComponent implements OnInit {
  fGroup: FormGroup = new FormGroup({});
  codigo: string = '';
  constructor(
    private fb: FormBuilder,
    private secService: SercurityService,
    private router: Router
    
  ) { }

  ngOnInit(): void {
    this.BuildingForm();
  }

  BuildingForm(){
    this.fGroup = this.fb.group({
      codigo: ['', []]   
    });
  }

  get fg() {
    return this.fGroup.controls;
  }

  validarCodigo(){
    this.codigo = this.fGroup.controls['codigo'].value;
    this.secService.DobleFactorRequest(this.codigo).subscribe({
      next: (data) => {
        if(data) {
          ShowToastMessage("Tu compra ha sido confirmada. ¡Gracias por preferirnos!");
          this.router.navigate(["/views/views-parque"]);
        } else{
          ShowToastMessage("¡Oh no! Código incorrecto.");
        }
      },
      error: (err) => {
        ShowToastMessage("¡Oh no! Código incorrecto.");
      }
    });
  }
}
