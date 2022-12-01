import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApisInfo } from 'src/app/config/apis-info';
import { ZonaModel } from 'src/app/models/zona.model';
import { ZonasService } from 'src/app/services/parameters/zonas.service';

@Component({
  selector: 'app-create-zonas',
  templateUrl: './create-zonas.component.html',
  styleUrls: ['./create-zonas.component.css']
})
export class CreateZonasComponent implements OnInit {

  urlServer: string = ApisInfo.LOGIC_MS_URL;
  uploadedImage: string = '';
  isFileSelected: boolean = false;

  fGroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder, 
    private zonasService: ZonasService
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
      color: ['', [Validators.required]],
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
    this.zonasService.uploadImage(formData).subscribe({
      next: (data) => {
        this.uploadedImage = data.file;
        alert('Imagen cargada');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  SaveRecord() {
    if (this.fGroup.invalid) {
      alert('Faltan datos' );
    } else {
      let model = new ZonaModel();
      //Tomar las variables del html y mandarlas al modelo
      model.imagen = this.uploadedImage;
      model.nombre = this.fGroup.controls['name'].value;
      model.descripcion = this.fGroup.controls['descripcion'].value;
      model.color = this.fGroup.controls['color'].value;      
      this.zonasService.saveRecord(model).subscribe({
        next: (data) => {
          alert('Registro almacenado correctamente con id ' + data.id);
        },
        error: (err) => {},
      });
    }
  }

}
