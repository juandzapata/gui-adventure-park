import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApisInfo } from 'src/app/config/apis-info';
import { CustomStyles } from 'src/app/config/custom.styles';
import { AtraccionModel } from 'src/app/models/atraccion.model';
import { AtraccionesService } from 'src/app/services/parameters/atracciones.service';
import { ZonaModel } from 'src/app/models/zona.model';
import { ZonasService } from 'src/app/services/parameters/zonas.service';
declare const ShowToastMessage:any;

@Component({
  selector: 'app-edit-atracciones',
  templateUrl: './edit-atracciones.component.html',
  styleUrls: ['./edit-atracciones.component.css']
})
export class EditAtraccionesComponent implements OnInit {


  urlServer: string = ApisInfo.LOGIC_MS_URL;
  uploadedImage: string = '';
  isFileSelected: boolean = false;

  zonas:ZonaModel[] = [];
  seleccionado = 0;
  fGroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder, 
    private atraccionesService: AtraccionesService,
    private router: Router,
    private route: ActivatedRoute,
    private zonasService: ZonasService,
    ) {}

  ngOnInit(): void {
    this.BuildingForm();
    this.LlenarListaCiudades();
    this.SearchRecord();
  }

  /**
   *
   */
  BuildingForm() {
    this.fGroup = this.fb.group({
      id: ['', []],
      name: ['', []],
      file: ['', []],
      estaturaMinima: ['', []],
      video: ['', []],
      descripcion: ['', []],
      seleccionado: ['', []],
      estado: ['', []]

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

  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.atraccionesService.getRecordById(id).subscribe({
      next: (data) => {
        //console.log(data);
        this.fGroup.controls["name"].setValue(data.nombre);
        this.fGroup.controls["id"].setValue(data.id);
        this.fGroup.controls["estaturaMinima"].setValue(data.estaturaMinima);
        this.fGroup.controls["video"].setValue(data.video);
        this.fGroup.controls["descripcion"].setValue(data.descripcion);
        this.uploadedImage = data.imagen;
        this.fGroup.controls["seleccionado"].setValue(data.zonaId);
        this.seleccionado = this.fGroup.controls["seleccionado"].value;
        this.fGroup.controls["estado"].setValue(data.estado);
      }, 
      error: (err) => {

      }
    })
  }

  EditarRecord() {
    if (this.fGroup.invalid) {
      ShowToastMessage("Faltan datos en el formulario", CustomStyles.error_toast_class);
    } else {
      let model = new AtraccionModel();
      //Tomar las variables del html y mandarlas al modelo
      model.imagen = this.uploadedImage;
      model.nombre = this.fGroup.controls['name'].value;
      model.estaturaMinima = this.fGroup.controls['estaturaMinima'].value;
      model.descripcion = this.fGroup.controls['descripcion'].value;
      model.video = this.fGroup.controls["video"].value;
      model.zonaId = this.seleccionado;
      model.estado = this.fGroup.controls["estado"].value;
      console.log(model);
      
      model.id = this.fGroup.controls["id"].value;

      this.atraccionesService.editRecord(model).subscribe({
        next: (data) => {
          ShowToastMessage("Registro actualizado correctamente");
          this.router.navigate(['/parameters/list-atracciones'])
        },
        error: (err) => {},
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


