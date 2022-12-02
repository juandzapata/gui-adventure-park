import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApisInfo } from 'src/app/config/apis-info';
import { CustomStyles } from 'src/app/config/custom.styles';
import { ZonaModel } from 'src/app/models/zona.model';
import { ZonasService } from 'src/app/services/parameters/zonas.service';

declare const ShowToastMessage:any;

@Component({
  selector: 'app-edit-zonas',
  templateUrl: './edit-zonas.component.html',
  styleUrls: ['./edit-zonas.component.css']
})
export class EditZonasComponent implements OnInit {

  urlServer: string = ApisInfo.LOGIC_MS_URL;
  uploadedImage: string = '';
  isFileSelected: boolean = false;

  fGroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder, 
    private zonasService: ZonasService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.BuildingForm();
    this.SearchRecord();
  }

  /**
   *
   */
  BuildingForm() {
    this.fGroup = this.fb.group({
      id: ['', []],
      name: ['', [Validators.required]],
      file: ['', []],
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
        ShowToastMessage("Imagen cargada éxitosamente", CustomStyles.success_toast_class);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.zonasService.getRecordById(id).subscribe({
      next: (data) => {
        console.log(data);
        this.fGroup.controls["id"].setValue(data.id);
        this.fGroup.controls["name"].setValue(data.nombre);
        this.fGroup.controls["descripcion"].setValue(data.descripcion);
        this.fGroup.controls["color"].setValue(data.color);
        this.uploadedImage = data.imagen; 
      }, 
      error: (err) => {
        console.log(err);
      }
    })
  }

  EditarRecord() {
    if (this.fGroup.invalid) {
      ShowToastMessage("Faltan datos", CustomStyles.error_toast_class);
    } else {
      let model = new ZonaModel();
      //Tomar las variables del html y mandarlas al modelo
      model.imagen = this.uploadedImage;
      model.nombre = this.fGroup.controls['name'].value;
      model.descripcion = this.fGroup.controls['descripcion'].value;
      model.color = this.fGroup.controls['color'].value;
      model.id = this.fGroup.controls['id'].value;

      this.zonasService.editRecord(model).subscribe({
        next: (data) => {
          alert('Registro actualizado correctamente');
          console.log(model);
          
          this.router.navigate(["/parameters/list-zonas"]);
        },
        error: (err) => {},
      });
    }
  }

}

