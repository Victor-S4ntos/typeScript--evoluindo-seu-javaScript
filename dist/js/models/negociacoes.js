export class Negociacoes {
    constructor() {
        //"Array" <Negocacao> é a mesma coisa de "Negociacao[]"
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return [...this.negociacoes];
    }
}
