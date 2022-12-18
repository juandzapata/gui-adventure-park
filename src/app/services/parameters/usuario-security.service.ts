import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApisInfo } from 'src/app/config/apis-info';
import { UserSecurityModel } from 'src/app/models/user-security.model';
import { LocalStorageService } from '../local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioSecurityService {
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
   saveRecord(record: UserSecurityModel): Observable<UserSecurityModel>{
    return this.http.post<UserSecurityModel>(this.url, {
      nombres: record.nombres,
      apellidos: record.apellidos,
      correo: record.correo,
      celular: record.celular,
      rolId: record.rolId,
    }, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.jwt}`
      })
    });
  }

  buscarCorreo(correo: string):Observable<UserSecurityModel>{
    let actionName = 'usuario/obtener-email'
    return this.http.get<UserSecurityModel>(`${this.baseUrl}/${actionName}/${correo}`);
  }

  editRecord(record: UserSecurityModel){
    return this.http.patch(this.url + "/" + record.id, {
      nombre: record.nombres,
      apellidos: record.apellidos,
      celular: record.celular,
      imagenPerfil: record.imagenPerfil,
      rolId: record.rolId,
      correo: record.correo
    }, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.jwt}`
      })
    });
  }
}
