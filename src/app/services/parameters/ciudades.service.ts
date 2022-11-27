import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApisInfo } from 'src/app/config/apis-info';
import { CiudadModel } from 'src/app/models/ciudad.model';
import { LocalStorageService } from '../local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CiudadesService {
  baseUrl:string = ApisInfo.LOGIC_MS_URL;
  actionName = 'ciudads';
  url:string = `${this.baseUrl}/${this.actionName}`;
  jwt: String = '';

  constructor(
    private http: HttpClient,
    private lsServices: LocalStorageService,

  ) { 

    this.jwt = lsServices.GetSessionToken();

  }

  /**
   * Obtiene la lista de parques
   * @returns La lista de parques como un objeto JSON
   */
  getRecordList():Observable<CiudadModel[]>{        
    return this.http.get<CiudadModel[]>(this.url);
  }

  /**
   * Crea un nuevo registro
   * @param record Datos del nuevo registro
   * @returns Registro ingresado
   */
  saveRecord(record: CiudadModel): Observable<CiudadModel>{
    return this.http.post<CiudadModel>(this.url, record, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.jwt}`
      })
    });
  }

  /**
   * Actualiza un registro
   * @param record registro a actualizar
   * @returns NA
   */
  editRecord(record: CiudadModel){
    return this.http.put(this.url + "/" + record.id, record, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.jwt}`
      })
    });
  }

  /**
   * Elimina un registro
   * @param id Id del registro a eliminar
   * @returns NA
   */
  removeRecord(id: number){
    return this.http.post(this.url + "/" + id, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.jwt}`
      })
    });
  }
}
