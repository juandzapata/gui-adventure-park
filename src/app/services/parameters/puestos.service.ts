import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApisInfo } from 'src/app/config/apis-info';
import { PuestoModel } from 'src/app/models/puesto.model';
import { UploadedFileModel } from 'src/app/models/uploaded.file.model';
import { LocalStorageService } from '../local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PuestosService {

  baseUrl:string = ApisInfo.LOGIC_MS_URL;
  actionName = 'puesto';
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
  getRecordList():Observable<PuestoModel[]>{        
    return this.http.get<PuestoModel[]>(this.url+'?filter={"include":["zona"]}');
  }

  getRecordById(id: number):Observable<PuestoModel>{        
    return this.http.get<PuestoModel>(this.url + "/" + id, {
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
  saveRecord(record: PuestoModel): Observable<PuestoModel>{
    return this.http.post<PuestoModel>(this.url, {
      nombre: record.nombre,
      imagen: record.imagen,
      menu: record.menu,
      zonaId: record.zonaId
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
  editRecord(record: PuestoModel){
    return this.http.put(this.url + "/" + record.id, {
      nombre: record.nombre,
      imagen: record.imagen,
      menu: record.menu,
      zonaId: record.zonaId
    }, {
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
    let actionName = "cargar-archivo/5";
    return this.http.post<UploadedFileModel>(`${this.baseUrl}/${actionName}`, formData,{
      headers: new HttpHeaders({
        "Authoritzation": `Bearer ${this.jwt}`
      })
    });
  }
}
