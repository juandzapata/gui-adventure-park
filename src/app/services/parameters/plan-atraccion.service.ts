import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApisInfo } from 'src/app/config/apis-info';
import { PlanAtraccionModel } from 'src/app/models/plan-atraccion.model';
import { LocalStorageService } from '../local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PlanAtraccionService {
  baseUrl: string = ApisInfo.LOGIC_MS_URL;
  actionName = 'plan-atraccion';
  url:string = `${this.baseUrl}/${this.actionName}`;
  jwt: String = '';

  constructor(
    private http: HttpClient,
    private lsServices: LocalStorageService
    
  ) { 
    this.jwt = lsServices.GetSessionToken();
  }

  /**
   * Obtiene la lista de planes por atraccion
   * @returns La lista de planes por atraccion como un objeto JSON
   */
  getRecordList():Observable<PlanAtraccionModel[]>{        
    return this.http.get<PlanAtraccionModel[]>(this.url+'?filter={"include":["atracciones","planes"]}');
  }

  getRecordById(id: number):Observable<PlanAtraccionModel>{        
    return this.http.get<PlanAtraccionModel>(this.url + "/" + id, {
      headers: new HttpHeaders({
        "Authorization": "Bearer "+ this.jwt
      })
    });
  }

  saveRecord(record: PlanAtraccionModel): Observable<PlanAtraccionModel>{
    return this.http.post<PlanAtraccionModel>(this.url, {
      planId: record.planId,
      atraccionId: record.atraccionId
    }, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.jwt}`
      })
    });
  }

  editRecord(record: PlanAtraccionModel){
    console.log(record);
    
    return this.http.put(this.url + "/" + record.id,  {
      planId: record.planId,
      atraccionId: record.atraccionId,
    }, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.jwt}`
      })
    });
  }

  removeRecord(id: number){
    return this.http.delete(this.url + "/" + id, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.jwt}`
      })
    });
  }

  getPlanesAtracciones(id:number):Observable<PlanAtraccionModel[]>{
    let actionName = `atraccions/${id}/plan-atraccions?filter={"include": ["planes"]}`;
    return this.http.get<PlanAtraccionModel[]>(`${this.baseUrl}/${actionName}`);
  }
}
