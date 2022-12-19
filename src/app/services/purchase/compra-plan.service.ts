import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApisInfo } from 'src/app/config/apis-info';
import { CompraPlanModel } from 'src/app/models/compra-plan.model';
import { LocalStorageService } from '../local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CompraPlanService {
  baseUrl:string = ApisInfo.LOGIC_MS_URL;
  actionName = 'compra-plan';
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
  getRecordList():Observable<CompraPlanModel[]>{        
    return this.http.get<CompraPlanModel[]>(this.url);
  }

  /**
   * Obtiene la atraccion segun el id
   * @returns la atraccion encontrada
   */
   getRecordById(id: number):Observable<CompraPlanModel>{        
    return this.http.get<CompraPlanModel>(this.url + "/" + id, {
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
  saveRecord(record: CompraPlanModel): Observable<CompraPlanModel>{
    return this.http.post<CompraPlanModel>(this.url, {
      cantidad: record.cantidad,
      total: record.total,
      compraId: record.compraId,
      planAtraccionId: record.planId, 
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
  editRecord(record: CompraPlanModel){
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
