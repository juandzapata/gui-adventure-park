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
   * Resetea los valores del usuario en el local storage para cerrar sesión
   */
  RemoveUserData(){
    localStorage.removeItem("user-data");
    let userData = new UserModel();
    this.secService.UpdateUserBehavior(userData);
  }

  /**
   * Retorna la información del usuario logueado
   * @returns El objeto o un valor nulo
   */
  GetSessionData(): LoggedUserModel | null{
    let userAsString = localStorage.getItem("user-data");
    if(userAsString){
      let userData: LoggedUserModel = JSON.parse(userAsString);
      return userData;
    }
    return null;
  }

  /**
   * Verifica el rol del usuario logueado
   * @returns El rol si hay un usuario logueado o vacío si no
   */
  GetRolId(){
    let userAsString = localStorage.getItem("user-data");
    if(userAsString){
      return JSON.parse(userAsString).user.rol;
    }
    return "";
  }


}
