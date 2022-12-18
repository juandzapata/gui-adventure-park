import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApisInfo } from 'src/app/config/apis-info';
import { ParqueModel } from 'src/app/models/parque.model';
import { UploadedFileModel } from 'src/app/models/uploaded.file.model';
import { LocalStorageService } from '../local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ParqueService {
  
  baseUrl:string = ApisInfo.LOGIC_MS_URL;
  actionName = 'parque';
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
  getRecordList():Observable<ParqueModel[]>{        
    return this.http.get<ParqueModel[]>(this.url+'?filter={"include":["categoria", "ciudad"]}');
  }

   /**
   * Obtiene el parque segun el id
   * @returns el parque encontrado
   */
    getRecordById(id: number):Observable<ParqueModel>{        
      return this.http.get<ParqueModel>(this.url + "/" + id, {
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
  saveRecord(record: ParqueModel): Observable<ParqueModel>{
    return this.http.post<ParqueModel>(this.url, {
      nombre: record.nombre,
      imagenLogo: record.imagenLogo,
      imagenMapa: record.imagenMapa,
      descripcion: record.descripcion,
      capacidad: record.capacidad,
      eslogan: record.eslogan,
      email: record.email,
      direccion: record.direccion,
      ciudadId: record.ciudadId,
      categoriaId: record.categoriaId

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
  editRecord(record: ParqueModel){
    return this.http.put(this.url + "/" + record.id,  record, {
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

  uploadImageLogo(formData: FormData): Observable<UploadedFileModel>{
    let actionName = "cargar-archivo/3";
    return this.http.post<UploadedFileModel>(`${this.baseUrl}/${actionName}`, formData,{
      headers: new HttpHeaders({
        "Authoritzation": `Bearer ${this.jwt}`
      })
    });
  }

  uploadImageMapa(formData: FormData): Observable<UploadedFileModel>{
    let actionName = "cargar-archivo/4";
    return this.http.post<UploadedFileModel>(`${this.baseUrl}/${actionName}`, formData,{
      headers: new HttpHeaders({
        "Authoritzation": `Bearer ${this.jwt}`
      })
    });
  }

}
