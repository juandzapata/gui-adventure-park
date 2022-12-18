import { CategoriaModel } from "./categoria.model";
import { CiudadModel } from "./ciudad.model";

export class ParqueModel{
    id: string = '';
    nombre: string = '';
    direccion: string = '';
    email: string = '';
    capacidad: number = 0;
    imagenLogo: string = '';
    imagenMapa: string = '';
    eslogan: string = '';
    descripcion: string = '';
    ciudadId: number = 0;
    categoriaId: number = 0;
    categoria:CategoriaModel = new CategoriaModel();
    ciudad: CiudadModel = new CiudadModel();
}