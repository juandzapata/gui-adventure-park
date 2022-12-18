import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApisInfo } from 'src/app/config/apis-info';
import { UploadedFileModel } from 'src/app/models/uploaded.file.model';
import { UserLogicModel } from 'src/app/models/user-logic-model';
import { LocalStorageService } from '../local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioLogicService {
  baseUrl:string = ApisInfo.LOGIC_MS_URL;
  actionName = 'usuario';
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
   saveRecord(record: UserLogicModel): Observable<UserLogicModel>{
    return this.http.post<UserLogicModel>(this.url, {
      nombre: record.nombre,
      email: record.email,
      estatura: record.estatura,
      edad: record.edad,
      cedula: record.cedula,
      apellidos: record.apellidos

    }, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.jwt}`
      })
    });
  }

  editRecord(record: UserLogicModel){
    return this.http.put(this.url + "/" + record.id, {
      nombre: record.nombre,
      apellidos: record.apellidos,
      cedula: record.cedula,
      edad: record.edad,
      estatura: record.estatura,
      email: record.email
    }, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.jwt}`
      })
    });
  }

  buscarCorreo(correo: string):Observable<UserLogicModel>{
    let actionName = 'obtener-email'
    return this.http.get<UserLogicModel>(`${this.url}/${actionName}/${correo}`);
  }

  uploadImage(formData: FormData): Observable<UploadedFileModel>{
    let actionName = "cargar-archivo/6";
    return this.http.post<UploadedFileModel>(`${this.baseUrl}/${actionName}`, formData,{
      headers: new HttpHeaders({
        "Authoritzation": `Bearer ${this.jwt}`
      })
    });
  }
}
