import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApisInfo } from 'src/app/config/apis-info';
import { DepartamentoModel } from 'src/app/models/departamento.model';
import { LocalStorageService } from '../local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {
  baseUrl:string = ApisInfo.LOGIC_MS_URL;
  actionName = 'departamento';
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
  getRecordList():Observable<DepartamentoModel[]>{        
    return this.http.get<DepartamentoModel[]>(this.url);
  }

  /**
   * Crea un nuevo registro
   * @param record Datos del nuevo registro
   * @returns Registro ingresado
   */
  saveRecord(record: DepartamentoModel): Observable<DepartamentoModel>{
    return this.http.post<DepartamentoModel>(this.url, record, {
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
  editRecord(record: DepartamentoModel){
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
