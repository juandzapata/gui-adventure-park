import { ParqueModel } from "./parque.model";

export class ZonaModel{
    id: string = '';
    nombre: string = '';
    imagen: string = '';
    color: string = '';
    descripcion: string = '';
    parqueId: number = 0;
    parque: ParqueModel = new ParqueModel();    
}