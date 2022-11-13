import { Injectable } from '@angular/core';
import { LoggedUserModel } from '../models/logged-user.model';
import { UserModel } from '../models/user.model';
import { SercurityService } from './sercurity.service';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(private secService: SercurityService) {}

  /**
   * 
   * @param data 
   * @returns 
   */
  SaveUserData(data: LoggedUserModel): boolean {
    let jsonAsString = JSON.stringify(data);
    if (!localStorage.getItem('user-data')) {
      localStorage.setItem('user-data', jsonAsString);
      this.secService.UpdateUserBehavior(data.user);
      return true;
    } else {
      return false;
    }
  }

  /**
   * Retorna la información del usuario logueado
   * @returns El objeto o un valor nulo
   */
  /*GetUserData():UserModel | null{
    let userAsString = localStorage.getItem("user-data");
    if(userAsString){
      let userData: LoggedUserModel = JSON.parse(userAsString);
      return userData.user;
    }
    return null; 
  }*/
}
