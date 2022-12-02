import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApisInfo } from 'src/app/config/apis-info';
import { CustomStyles } from 'src/app/config/custom.styles';
import { PuestoModel } from 'src/app/models/puesto.model';
import { PuestosService } from 'src/app/services/parameters/puestos.service';

declare const ShowToastMessage:any;

@Component({
  selector: 'app-edit-puestos',
  templateUrl: './edit-puestos.component.html',
  styleUrls: ['./edit-puestos.component.css']
})
export class EditPuestosComponent implements OnInit {

  urlServer: string = ApisInfo.LOGIC_MS_URL;
  uploadedImage: string = '';
  isFileSelected: boolean = false;

  fGroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder, 
    private puestosService: PuestosService,
    private router: Router,
    private route: ActivatedRoute
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
      menu: ['', [Validators.required]],
    });
  }

  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.puestosService.getRecordById(id).subscribe({
      next: (data) => {
        console.log(data);
        this.fGroup.controls["id"].setValue(data.id);
        this.fGroup.controls["name"].setValue(data.nombre);
        this.fGroup.controls["menu"].setValue(data.menu);
        this.uploadedImage = data.imagen; 
      }, 
      error: (err) => {
        console.log(err);
      }
    })
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

  EditarRecord() {
    if (this.fGroup.invalid) {
      ShowToastMessage("Faltan datos", CustomStyles.error_toast_class);
    } else {
      let model = new PuestoModel();
      //Tomar las variables del html y mandarlas al modelo
      model.imagen = this.uploadedImage;
      model.nombre = this.fGroup.controls['name'].value;
      model.menu = this.fGroup.controls['menu'].value;
      model.id = this.fGroup.controls['id'].value;
      this.puestosService.editRecord(model).subscribe({
        next: (data) => {
          ShowToastMessage("Registro actualizado éxitosamente", CustomStyles.success_toast_class);
          this.router.navigate(['/parameters/list-puestos']);
        },
        error: (err) => {},
      });
    }
  }

}

