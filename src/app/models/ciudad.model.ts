import { DepartamentoModel } from "./departamento.model";

export class CiudadModel{
    id: string = '';
    nombre: string = '';
    codigoPostal: string = '';   
    departamentoId: number = 0; 
    departamento: DepartamentoModel = new DepartamentoModel();
}