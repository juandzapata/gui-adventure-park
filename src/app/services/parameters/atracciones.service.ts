import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApisInfo } from 'src/app/config/apis-info';
import { AtraccionModel } from 'src/app/models/atraccion.model';
import { UploadedFileModel } from 'src/app/models/uploaded.file.model';
import { LocalStorageService } from '../local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AtraccionesService {

  baseUrl:string = ApisInfo.LOGIC_MS_URL;
  actionName = 'atraccion';
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
  getRecordList():Observable<AtraccionModel[]>{        
    return this.http.get<AtraccionModel[]>(this.url+'?filter={"include":["zona"]}');
  }

  /**
   * Obtiene la atraccion segun el id
   * @returns la atraccion encontrada
   */
   getRecordById(id: number):Observable<AtraccionModel>{        
    return this.http.get<AtraccionModel>(this.url + "/" + id, {
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
  saveRecord(record: AtraccionModel): Observable<AtraccionModel>{
    return this.http.post<AtraccionModel>(this.url, {
      nombre: record.nombre,
      imagen: record.imagen,
      estaturaMinima: record.estaturaMinima,
      video: record.video,
      descripcion: record.descripcion,
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
  editRecord(record: AtraccionModel){
    return this.http.put(this.url + "/" + record.id, {
      nombre: record.nombre,
      imagen: record.imagen,
      estaturaMinima: record.estaturaMinima,
      video: record.video,
      descripcion: record.descripcion,
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
    let actionName = "cargar-archivo/1";
    return this.http.post<UploadedFileModel>(`${this.baseUrl}/${actionName}`, formData,{
      headers: new HttpHeaders({
        "Authoritzation": `Bearer ${this.jwt}`
      })
    });
  }
}
