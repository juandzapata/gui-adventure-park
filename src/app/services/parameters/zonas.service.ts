import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApisInfo } from 'src/app/config/apis-info';
import { UploadedFileModel } from 'src/app/models/uploaded.file.model';
import { ZonaModel as ZonaModel } from 'src/app/models/zona.model';
import { LocalStorageService } from '../local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ZonasService {
  baseUrl:string = ApisInfo.LOGIC_MS_URL;
  actionName = 'zona';
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
  getRecordList():Observable<ZonaModel[]>{        
    return this.http.get<ZonaModel[]>(this.url);
  }

  getZonasParque(id: number):Observable<ZonaModel[]>{
    let actionName = `parques/${id}/zonas`;
    return this.http.get<ZonaModel[]>(`${this.baseUrl}/${actionName}`);
  }

   /**
   * Obtiene la zona segun el id
   * @returns la zona encontrada
   */
    getRecordById(id: number):Observable<ZonaModel>{        
      return this.http.get<ZonaModel>(this.url + "/" + id, {
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
  saveRecord(record: ZonaModel): Observable<ZonaModel>{
    return this.http.post<ZonaModel>(this.url, {
      nombre: record.nombre,
      imagen: record.imagen,
      color: record.color,
      descripcion: record.descripcion,
      parqueId: record.parqueId
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
  editRecord(record: ZonaModel){
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
  
  uploadImage(formData: FormData): Observable<UploadedFileModel>{
    let actionName = "cargar-archivo/2";
    return this.http.post<UploadedFileModel>(`${this.baseUrl}/${actionName}`, formData,{
      headers: new HttpHeaders({
        "Authoritzation": `Bearer ${this.jwt}`
      })
    });
  }
}
