import { UserLogicModel } from "./user-logic-model";

export class CompraModel{
    id: number = 0;
    fecha: string = '';
    usuarioId: number = 0;
    usuario: UserLogicModel = new UserLogicModel();
}