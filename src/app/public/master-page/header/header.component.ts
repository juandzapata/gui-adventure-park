import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { SercurityService } from 'src/app/services/sercurity.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  rolId:string = '';
  isLogged:boolean = false;
  fullname:string = "";
  constructor(
    private secService: SercurityService,
    private lsService: LocalStorageService
    ) { }

  ngOnInit(): void {
    this.secService.getUserData().subscribe({
      next: (data:UserModel) =>{
        this.isLogged = data.isLogged;
        this.rolId = data.rol;
        this.fullname = data.nombre;
      },
      error: (err) =>{

      }
    });
  }

}
