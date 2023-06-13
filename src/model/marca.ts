import { AbstractEntity } from "./abstract-entity";

export class Marca extends AbstractEntity {
    nome! : string

    constructor(){
        super()
        this.ativo = true
    }
}