import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    //"Array" <Negocacao> é a mesma coisa de "Negociacao[]"
    private negociacoes: Negociacao[]= []

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao)
    }
   
    lista(): readonly Negociacao[]{
        return [... this.negociacoes]
    }
}