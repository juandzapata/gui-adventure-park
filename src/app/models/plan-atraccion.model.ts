import { AtraccionModel } from "./atraccion.model";
import { PlanModel } from "./plan.model";

export class PlanAtraccionModel{
    id: number = 0;
    atraccionId: number = 0;
    planId: number = 0;
    descripcion: string = '';
    precio: number = 0;
    atracciones: AtraccionModel = new AtraccionModel();
    planes: PlanModel = new PlanModel();
}