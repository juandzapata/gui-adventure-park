import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApisInfo } from 'src/app/config/apis-info';
import { UserModel } from 'src/app/models/user.model';
import { LocalStorageService } from '../local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  baseUrl:string = ApisInfo.SEC_MS_URL;
  actionName = 'usuarios';
  url:string = `${this.baseUrl}/${this.actionName}`;
  jwt: String = '';
  
  constructor(
    private http: HttpClient,
    private lsServices: LocalStorageService,
  ) { 
    this.jwt = lsServices.GetSessionToken();

  }

  /**
   * Crea un nuevo registro
   * @param record Datos del nuevo registro
   * @returns Registro ingresado
   */
   saveRecord(record: UserModel): Observable<UserModel>{
    return this.http.post<UserModel>(this.url, {
      nombre: record.nombre,
      correo: record.correo,
      rol: record.rol
    }, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.jwt}`
      })
    });
  }
}
