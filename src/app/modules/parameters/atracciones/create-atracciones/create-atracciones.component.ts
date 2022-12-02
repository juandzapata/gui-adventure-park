import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { mode } from 'crypto-js';
import { ApisInfo } from 'src/app/config/apis-info';
import { CustomStyles } from 'src/app/config/custom.styles';
import { AtraccionModel } from 'src/app/models/atraccion.model';
import { AtraccionesService } from 'src/app/services/parameters/atracciones.service';

declare const ShowToastMessage:any;

@Component({
  selector: 'app-create-atracciones',
  templateUrl: './create-atracciones.component.html',
  styleUrls: ['./create-atracciones.component.css']
})
export class CreateAtraccionesComponent implements OnInit {

  urlServer: string = ApisInfo.LOGIC_MS_URL;
  uploadedImage: string = '';
  isFileSelected: boolean = false;

  fGroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder, 
    private atraccionesService: AtraccionesService,
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
      name: ['', [Validators.required]],
      file: ['', [Validators.required]],
      estaturaMinima: ['', [Validators.required]],
      video: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],

    });
  }

  get fg() {
    return this.fGroup.controls;
  }

  /**
   * Se obtiene el archivo seleccionado del input file
   * @param evt evento de selección
   */
  onFileSelect(evt: any) {
    if (evt.target.files.length > 0) {
      const f = evt.target.files[0];
      this.fGroup.controls['file'].setValue(f);
      this.isFileSelected = true;
    }
  }

  UploadImage() {
    const formData = new FormData();
    formData.append('file', this.fGroup.controls['file'].value);
    this.atraccionesService.uploadImage(formData).subscribe({
      next: (data) => {
        this.uploadedImage = data.file;
        ShowToastMessage("Imagen cargada éxitosamente", CustomStyles.success_toast_class);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  SaveRecord() {
    if (this.fGroup.invalid) {
      ShowToastMessage("Faltan datos en el formulario", CustomStyles.error_toast_class);
    } else {
      let model = new AtraccionModel();
      //Tomar las variables del html y mandarlas al modelo
      model.imagen = this.uploadedImage;
      model.nombre = this.fGroup.controls['name'].value;
      model.estaturaMinima = this.fGroup.controls['estaturaMinima'].value;
      model.descripcion = this.fGroup.controls['descripcion'].value;
      model.video = this.fGroup.controls['video'].value;
      this.atraccionesService.saveRecord(model).subscribe({
        next: (data) => {
          ShowToastMessage("Registro almacenado éxitosamente", CustomStyles.success_toast_class);
          this.router.navigate(['/parameters/list-atracciones'])
        },
        error: (err) => {},
      });
    }
  }

}
