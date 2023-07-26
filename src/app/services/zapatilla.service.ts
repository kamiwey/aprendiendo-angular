import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Injectable()
export class ZapatillaService{
    public zapatillas: Array<Zapatilla>;
    constructor(){
        this.zapatillas = [
            new Zapatilla('Nike Jordan', 'Nike', 'Rojo', 190, true),
            new Zapatilla('Reebok Classic', 'Reebok', 'Blanco', 80, true),
            new Zapatilla('Reebok Pochas', 'Reebok', 'Negro', 180, true),
            new Zapatilla('Cortez', 'Nike', 'Negra', 60, true),
            new Zapatilla('Adidad Superstar', 'Adidas', 'Gris', 180, false)
        ];
    }

    getTexto(){
        return "Hola mundo desde un servicio";
    }

    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas;
    }
}