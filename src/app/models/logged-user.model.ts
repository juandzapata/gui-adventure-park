import { UserModel } from "./user.model";

export class LoggedUserModel{
    token:string = '';
    user: UserModel = {
        id: '',
        nombre: '',
        correo: '',
        rol: '',
        isLogged: false
    } 
}