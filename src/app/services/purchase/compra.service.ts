import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApisInfo } from 'src/app/config/apis-info';
import { CompraModel } from 'src/app/models/compra.model';
import { LocalStorageService } from '../local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  baseUrl:string = ApisInfo.LOGIC_MS_URL;
  actionName = 'compras';
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
  getRecordList():Observable<CompraModel[]>{        
    return this.http.get<CompraModel[]>(this.url);
  }

  /**
   * Obtiene la atraccion segun el id
   * @returns la atraccion encontrada
   */
   getRecordById(id: number):Observable<CompraModel>{        
    return this.http.get<CompraModel>(this.url + "/" + id, {
      headers: new HttpHeaders({
        "Authorization": "Bearer "+ this.jwt
      })
    });
  }

  /**
   * Crea un nuevo registro
   * @param record Datos del nuevo registro
   * @returns Registro ingresado
   */
  saveRecord(record: CompraModel): Observable<CompraModel>{
    return this.http.post<CompraModel>(this.url, {
      fecha: record.fecha,
      usuarioId: record.usuarioId
    }, {
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
  editRecord(record: CompraModel){
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
    return this.http.delete(this.url + "/" + id, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.jwt}`
      })
    });
  }
}
