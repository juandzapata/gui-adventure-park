import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApisInfo } from 'src/app/config/apis-info';
import { CustomStyles } from 'src/app/config/custom.styles';
import { UserLogicModel } from 'src/app/models/user-logic-model';
import { UserSecurityModel } from 'src/app/models/user-security.model';
import { UserModel } from 'src/app/models/user.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UsuarioLogicService } from 'src/app/services/parameters/usuario-logic.service';
import { UsuarioSecurityService } from 'src/app/services/parameters/usuario-security.service';
import { SercurityService } from 'src/app/services/sercurity.service';

export declare const ShowToastMessage:any;
@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.css']
})
export class EditUsuarioComponent implements OnInit {

  urlServer: string = ApisInfo.LOGIC_MS_URL;
  uploadedImage: string = '';
  isFileSelected: boolean = false;
  fGroup: FormGroup = new FormGroup({});
  usuarioCorreo: string = '';
  usuarioIdLogica: number = 0;
  usuarioIdSecurity: string = '';
  rolUsuario: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usuariosService: UsuarioLogicService,
    private usuarioSecService: UsuarioSecurityService,
    private ls: LocalStorageService,
    private secService: SercurityService
  ) { }

  ngOnInit(): void {
    this.BuildingForm();
    this.buscarUsuarioLogica();
    this.buscarUsuarioLogica();
    this.changeInfo();
    
  }

  BuildingForm() {
    this.fGroup = this.fb.group({
      id: ['', []],
      name: ['', []],
      apellidos: ['', []],
      identidad: ['', []],
      edad: ['', []],
      celular: ['', []],
      estatura: ['', []],
      file: ['', []]
    });
  }

  get fg() {
    return this.fGroup.controls;
  }

  onFileSelect(evt: any) {
    if (evt.target.files.length > 0) {
      const f = evt.target.files[0];
      console.log(f);
      this.fGroup.controls['file'].setValue(f);
      this.isFileSelected = true;
    }
  }

  UploadImage() {
    const formData = new FormData();
    formData.append('file', this.fGroup.controls['file'].value);
    this.usuariosService.uploadImage(formData).subscribe({
      next: (data) => {
        //console.log(data);
        this.uploadedImage = data.file;
        ShowToastMessage("Imagen cargada éxitosamente", CustomStyles.success_toast_class);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  changeInfo() {
    this.usuariosService.buscarCorreo(this.usuarioCorreo).subscribe({
      next: (data) => {
        //console.log(data);
        
        this.fGroup.controls['name'].setValue(data.nombre);
        this.fGroup.controls['apellidos'].setValue(data.apellidos);
        this.fGroup.controls['identidad'].setValue(data.cedula);
        this.fGroup.controls['estatura'].setValue(data.estatura);
        this.fGroup.controls['edad'].setValue(data.edad);
        this.usuarioIdLogica = data.id;
        //console.log(this.usuarioIdLogica);

        this.usuarioSecService.buscarCorreo(this.usuarioCorreo).subscribe({
          next: (data) => {
            //console.log(data);
            
            this.fGroup.controls['celular'].setValue(data.celular);
            this.uploadedImage = data.imagenPerfil;
          }});
        
      }
    });

  }

  EditarRecord(){
    //edit en logica
    let model = new UserLogicModel();
    model.nombre =  this.fGroup.controls['name'].value;
    model.apellidos =  this.fGroup.controls['apellidos'].value;
    model.cedula =  this.fGroup.controls['identidad'].value;
    model.estatura =  this.fGroup.controls['estatura'].value;
    model.edad =  this.fGroup.controls['edad'].value;
    model.id = this.usuarioIdLogica;
    model.email = this.usuarioCorreo;

    this.usuariosService.editRecord(model).subscribe({
      next: (data) => {
        console.log("Editado en logica");
        
      }
    });

    let modelS = new UserSecurityModel();
        modelS.nombres =  this.fGroup.controls['name'].value;
        modelS.apellidos =  this.fGroup.controls['apellidos'].value;
        modelS.celular =  this.fGroup.controls['celular'].value;
        modelS.correo =  this.usuarioCorreo;
        modelS.id = this.usuarioIdSecurity;
        modelS.rolId = this.rolUsuario;

        if (this.uploadedImage != null) {
          modelS.imagenPerfil = this.uploadedImage;
        } else {
          modelS.imagenPerfil = '';
        }
        
        this.usuarioSecService.editRecord(modelS).subscribe({
          next: (data) => {
            ShowToastMessage("¡Tu perfil ha sido actualizado!");
            this.router.navigate(['/home']);
          }
        });


  }

  buscarUsuarioLogica() {
    let userData = this.ls.GetSessionData();
    if(userData){
      //console.log(userData);    
      this.usuarioCorreo = userData.user.correo;
      this.usuarioIdSecurity = userData.user.id;
      this.rolUsuario = userData.user.rol;
      //console.log(this.usuarioCorreo);
    } else{
      ShowToastMessage("Error obteniendo correo");
    }
  }

  buscarUsuarioEnSesion() {
    this.secService.getUserData().subscribe({
      next: (data:UserModel) => {
        //console.log(data);
      },
      error: (err) =>{
      }
    });
  }
}
