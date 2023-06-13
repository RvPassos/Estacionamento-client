import { AbstractEntity } from "./abstract-entity";

export class Configuracao extends AbstractEntity {
    valorHora! : number
    valorMinutoMulta! : number
    inicioExpediente! : Date
    fimExpediente! : Date
    tempoParaDesconto! : number
    tempoDeDesconto! : number
    gerarDesconto! : boolean
    vagasMoto! : number
    vagasCarro! : number
    vagasVan! : number

    constructor(){
        super()
        this.ativo = true
    }
}