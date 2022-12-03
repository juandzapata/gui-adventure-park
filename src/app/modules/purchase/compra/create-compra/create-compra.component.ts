import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApisInfo } from 'src/app/config/apis-info';
import { CompraModel } from 'src/app/models/compra.model';
import { ParqueService } from 'src/app/services/parameters/parque.service';
import { CompraService } from 'src/app/services/purchase/compra.service';

@Component({
  selector: 'app-create-compra',
  templateUrl: './create-compra.component.html',
  styleUrls: ['./create-compra.component.css']
})
export class CreateCompraComponent implements OnInit {

  urlServer: string = ApisInfo.LOGIC_MS_URL;
  uploadedImageLogo: string = '';
  uploadedImageMapa: string = '';
  isFileSelectedLogo: boolean = false;
  isFileSelectedMapa: boolean = false;

  fGroup: FormGroup = new FormGroup({});
  

  constructor(
    private fb: FormBuilder, 
    private compraService: CompraService ,
    private router: Router,
    ) {}

  ngOnInit(): void {
    this.BuildingForm();
  }

  /**
   *
   */
  BuildingForm() {
    this.fGroup = this.fb.group({
      id: ['', []],
      fecha: ['',[Validators.required]]
    });
  }

  get fg() {
    return this.fGroup.controls;
  }

}
