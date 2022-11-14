import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';
import { SercurityService } from '../services/sercurity.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatedGuard implements CanActivate {
  constructor(
    private lsService: LocalStorageService,
    private secService: SercurityService,
    private router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let sessionData = this.lsService.GetSessionData();
    console.log(sessionData?.token);
    if (sessionData) {
      console.log(this.secService.CheckSessionToken(sessionData?.token))
      return this.secService.CheckSessionToken(sessionData?.token);
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
     
}
