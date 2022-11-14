import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private lsService: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.lsService.RemoveUserData();
    this.router.navigate(['/home']);
  }

}
