import { makeBindingParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { mode } from 'crypto-js';
import { ApisInfo } from 'src/app/config/apis-info';
import { CustomStyles } from 'src/app/config/custom.styles';
import { ParqueModel } from 'src/app/models/parque.model';
import { ParqueService } from 'src/app/services/parameters/parque.service';


declare const ShowToastMessage:any;

@Component({
  selector: 'app-create-parque',
  templateUrl: './create-parque.component.html',
  styleUrls: ['./create-parque.component.css'],
})
export class CreateParqueComponent implements OnInit {
  urlServer: string = ApisInfo.LOGIC_MS_URL;
  uploadedImageLogo: string = '';
  uploadedImageMapa: string = '';
  isFileSelectedLogo: boolean = false;
  isFileSelectedMapa: boolean = false;

  fGroup: FormGroup = new FormGroup({});
  //selectedOption = 0;
  //listaCiudades: string[] = ['ciudad1', 'ciudad2', 'ciudad3'];

  constructor(
    private fb: FormBuilder, 
    private parqueService: ParqueService,
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
      email: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      eslogan: ['', [Validators.required]],
      capacidad: [0, [Validators.required]],
      direccion: ['', [Validators.required]],
      mapFile: ['', [Validators.required]],
      logoFile: ['', [Validators.required]],
    });
  }

  get fg() {
    return this.fGroup.controls;
  }

  /**
   * Se obtiene el archivo seleccionado del input file
   * @param evt evento de selección
   */
  onFileSelectLogo(evt: any) {
    if (evt.target.files.length > 0) {
      const f = evt.target.files[0];
      this.fGroup.controls['logoFile'].setValue(f);
      this.isFileSelectedLogo = true;
    }
  }

  onFileSelectMapa(evt: any) {
    if (evt.target.files.length > 0) {
      const f = evt.target.files[0];
      this.fGroup.controls['mapFile'].setValue(f);
      this.isFileSelectedMapa = true;
    }
  }

  UploadImageLogo() {
    const formData = new FormData();
    formData.append('file', this.fGroup.controls['logoFile'].value);
    this.parqueService.uploadImageLogo(formData).subscribe({
      next: (data) => {
        this.uploadedImageLogo = data.file;
        alert('Imagen cargada');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  UploadImageMapa() {
    const formData = new FormData();
    formData.append('file', this.fGroup.controls['mapFile'].value);
    this.parqueService.uploadImageMapa(formData).subscribe({
      next: (data) => {
        this.uploadedImageMapa= data.file;
        alert('Imagen cargada');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  SaveRecord() {
    if (this.fGroup.invalid) {
      ShowToastMessage("Faltan datos", CustomStyles.error_toast_class);      
    } else {
      let model = new ParqueModel();
      model.imagenLogo = this.uploadedImageLogo;
      model.nombre = this.fGroup.controls['name'].value;
      model.capacidad = this.fGroup.controls['capacidad'].value;
      model.descripcion = this.fGroup.controls['descripcion'].value;
      model.email = this.fGroup.controls['email'].value;
      model.eslogan = this.fGroup.controls['eslogan'].value;
      model.direccion = this.fGroup.controls['direccion'].value;
      model.imagenMapa = this.uploadedImageMapa;

      console.log(model);
      this.parqueService.saveRecord(model).subscribe({
        next: (data) => {
          ShowToastMessage("Registro almacenado éxitosamente", CustomStyles.success_toast_class);
          this.router.navigate(['/parameters/list-parque']);
        },
        error: (err) => {
          ShowToastMessage("Error almacenado el registro", CustomStyles.success_toast_class);
        },
      });
    }
  }
}
