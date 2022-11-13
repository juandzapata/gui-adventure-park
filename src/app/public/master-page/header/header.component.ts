import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { SercurityService } from 'src/app/services/sercurity.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged: boolean = false;
  constructor(private secService: SercurityService) { }

  ngOnInit(): void {
    this.secService.getUserData().subscribe({
      next: (data:UserModel) =>{
        this.isLogged = data.isLogged;
      },
      error: (err) =>{

      }
    });
  }

}
