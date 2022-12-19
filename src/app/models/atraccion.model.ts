import { ZonaModel } from "./zona.model";

export class AtraccionModel{
    id: string='';
    nombre: string='';
    imagen: string = '';
    estaturaMinima: string = '';
    video: string = '';
    descripcion: string = '';
    zonaId: number = 0;
    estado: string = '';
    zona: ZonaModel = new ZonaModel();
}