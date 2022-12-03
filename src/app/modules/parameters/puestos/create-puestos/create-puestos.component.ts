import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApisInfo } from 'src/app/config/apis-info';
import { CustomStyles } from 'src/app/config/custom.styles';
import { PuestoModel } from 'src/app/models/puesto.model';
import { PuestosService } from 'src/app/services/parameters/puestos.service';
import { ZonaModel } from 'src/app/models/zona.model';
import { ZonasService } from 'src/app/services/parameters/zonas.service';

declare const ShowToastMessage:any;

@Component({
  selector: 'app-create-puestos',
  templateUrl: './create-puestos.component.html',
  styleUrls: ['./create-puestos.component.css']
})
export class CreatePuestosComponent implements OnInit {

  urlServer: string = ApisInfo.LOGIC_MS_URL;
  uploadedImage: string = '';
  isFileSelected: boolean = false;

  zonas: ZonaModel[] = [];
  seleccionado = 0;

  fGroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder, 
    private puestosService: PuestosService,
    private router: Router,
    private zonasService: ZonasService
    ) {}

  ngOnInit(): void {
    this.BuildingForm();
    this.LlenarListaCiudades();
  }

  /**
   *
   */
  BuildingForm() {
    this.fGroup = this.fb.group({
      id: ['', []],
      name: ['', [Validators.required]],
      file: ['', [Validators.required]],
      menu: ['', [Validators.required]],
      seleccionado: ['', [Validators.required]],
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
    this.puestosService.uploadImage(formData).subscribe({
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
      ShowToastMessage("Faltan datos", CustomStyles.error_toast_class);
    } else {
      let model = new PuestoModel();
      //Tomar las variables del html y mandarlas al modelo
      model.imagen = this.uploadedImage;
      model.nombre = this.fGroup.controls['name'].value;
      model.menu = this.fGroup.controls['menu'].value;
      model.zonaId = this.seleccionado;

      this.puestosService.saveRecord(model).subscribe({
        next: (data) => {
          ShowToastMessage("Registro almacenado éxitosamente", CustomStyles.success_toast_class);
          this.router.navigate(['/parameters/list-puestos']);
        },
        error: (err) => {
          ShowToastMessage("Error almacenando el registro", CustomStyles.error_toast_class);

        },
      });
    }
  }

  LlenarListaCiudades(){
    this.zonasService.getRecordList().subscribe({
      next: (data) =>{
        this.zonas = data;
        console.log(data);
        
      }
    });
  }

  capturar() {
    this.seleccionado = parseInt(this.fGroup.controls["seleccionado"].value);
  }

}
