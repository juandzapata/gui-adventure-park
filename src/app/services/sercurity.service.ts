import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApisInfo } from '../config/apis-info';
import { LoggedUserModel } from '../models/logged-user.model';
import { UserModel } from '../models/user.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SercurityService {

  userData = new BehaviorSubject<UserModel>(new UserModel)

  url:string = ApisInfo.SEC_MS_URL;
  constructor(
    private http:HttpClient,    
  ) {
    this.sessionValidaton();
   }

  /**
   * Confirmar si existe información de un loggin activo anteriormente
   */
  sessionValidaton(){
    let userAsString = localStorage.getItem("user-data");
    if(userAsString){
      let userData: LoggedUserModel = JSON.parse(userAsString);
      this.UpdateUserBehavior(userData.user);
    }     
  }  
  
  /**
   * Atualiza los datos del nuevo usuario logueado
   * @param data nueva información
   * @returns el estado del UserData
   */
  UpdateUserBehavior(data: UserModel){
    return this.userData.next(data)
  }


  /**
   * Retorna la información del usuario que esté en sesión
   * @returns La información del usuario logueado
   */
  getUserData(){
    return this.userData.asObservable()
  }
  
  /**
   * Hace una petición al backend para utilizar le método de: -recupera contraseña-
   */
  ResetPasswordRequest(username: string):Observable<boolean>{
    let actionName = 'recuperar-clave';
    return this.http.post<boolean>(`${this.url}${actionName}`, {
      correo: username
    });
  }

  /**
   * Realiza una petición al backend para utilizar le método de: -login-
   */
  LoginRequest(username: string, password: string):Observable<LoggedUserModel>{
    let actionName = 'login';    
    return this.http.post<LoggedUserModel>(`${this.url}${actionName}`, {
      correo: username,
      clave: password
    });
  }

  /**
   * Valida si el token almacenado es correcto
   * @param jwt Token de localStroge
   * @returns String con: -Rol Id- o -Vacío-
   */
  CheckSessionToken(jwt:string):Observable<boolean>{
    let actionName = 'check-validate-token/';
    return this.http.get<boolean>(`${this.url}${actionName}/${jwt}`);
  }

}
