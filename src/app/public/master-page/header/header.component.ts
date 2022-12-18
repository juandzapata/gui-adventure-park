import { Component, OnInit } from '@angular/core';
import { ApisInfo } from 'src/app/config/apis-info';
import { UserModel } from 'src/app/models/user.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UsuarioSecurityService } from 'src/app/services/parameters/usuario-security.service';
import { SercurityService } from 'src/app/services/sercurity.service';
declare const DropBoxNav: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  rolId:string = '';
  isLogged:boolean = false;
  fullname:string = "";
  urlServer:string = ApisInfo.LOGIC_MS_URL;
  imagen: string = "";
  correo: string = '';
  selected: boolean = false;
  usuarioId: number = 0;

  constructor(
    private secService: SercurityService,
    private lsService: LocalStorageService,
    private userSecService: UsuarioSecurityService
    ) { }

  ngOnInit(): void {
    this.secService.getUserData().subscribe({
      next: (data:UserModel) =>{
        this.isLogged = data.isLogged;
        this.rolId = data.rol;
        this.correo = data.correo;

        this.userSecService.buscarCorreo(this.correo).subscribe({
          next: (data) => {
            this.imagen = data.imagenPerfil;
            this.fullname = `${data.nombres} ${data.apellidos}`        
          },
        });
      },
      error: (err) =>{

      }
    });
  }


}
