import { ZonaModel } from "./zona.model";

export class PuestoModel{
    id: string = '';
    nombre: string = '';
    imagen: string = '';
    menu: string = '';
    zonaId: number = 0;
    zona: ZonaModel = new ZonaModel();
    
}