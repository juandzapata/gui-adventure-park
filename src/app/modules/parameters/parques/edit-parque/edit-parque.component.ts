import { makeBindingParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApisInfo } from 'src/app/config/apis-info';
import { CustomStyles } from 'src/app/config/custom.styles';
import { ParqueModel } from 'src/app/models/parque.model';
import { ParqueService } from 'src/app/services/parameters/parque.service';

declare const  ShowToastMessage:any;

@Component({
  selector: 'app-edit-parque',
  templateUrl: './edit-parque.component.html',
  styleUrls: ['./edit-parque.component.css'],
})
export class EditParqueComponent implements OnInit {
  urlServer: string = ApisInfo.LOGIC_MS_URL;
  uploadedImageLogo: string = '';
  uploadedImageMapa: string = '';
  isFileSelectedLogo: boolean = false;
  isFileSelectedMapa: boolean = false;

  fGroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder, 
    private parqueService: ParqueService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    console.log("problemas aqui");
    
    this.BuildingForm();
    this.SearchRecord();
  }

  /**
   *
   */
  BuildingForm() {
    console.log("no puedo construir el formGroup");
    
    this.fGroup = this.fb.group({
      id: ['', []],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      eslogan: ['', [Validators.required]],
      capacidad: [0, [Validators.required]],
      direccion: ['', [Validators.required]],
      mapFile: ['', []],
      logoFile: ['', []],
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
        ShowToastMessage("Imagen cargada éxitosamente", CustomStyles.success_toast_class);
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
        this.uploadedImageMapa = data.file;
        ShowToastMessage("Imagen cargada éxitosamente", CustomStyles.success_toast_class);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.parqueService.getRecordById(id).subscribe({
      next: (data) => {
        console.log(data);
        this.fGroup.controls["id"].setValue(data.id);
        this.fGroup.controls["name"].setValue(data.nombre);
        this.fGroup.controls["email"].setValue(data.email);
        this.fGroup.controls["descripcion"].setValue(data.descripcion);
        this.fGroup.controls["eslogan"].setValue(data.eslogan);
        this.fGroup.controls["capacidad"].setValue(data.capacidad);
        this.fGroup.controls["direccion"].setValue(data.direccion);
        this.uploadedImageLogo = data.imagenLogo;
        this.uploadedImageMapa = data.imagenMapa;
      }, 
      error: (err) => {
        console.log(err);
        

      }
    })
  }

  EditRecord() {
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
      model.id = this.fGroup.controls["id"].value;
      //console.log(model);
      this.parqueService.editRecord(model).subscribe({
        next: (data) => {
          ShowToastMessage("Registro actualizado éxitosamente", CustomStyles.success_toast_class);
          this.router.navigate(['/parameters/list-parque']);
        },
        error: (err) => {
          console.log(err);
          
        },
      });
    }
  }
}

