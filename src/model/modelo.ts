import { AbstractEntity } from "./abstract-entity";
import { Marca } from "./marca";

export class Modelo extends AbstractEntity {
    nome! : string
    marcaId! : Marca

    constructor(){
        super()
        this.ativo = true
    }
}