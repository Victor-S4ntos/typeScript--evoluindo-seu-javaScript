export class Negociacao {

    constructor(
        public readonly _data: Date,
        public readonly _quantidade: number,
        public readonly _valor: number) {
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        return this._data
    }

    get quantidade(): Number {
        return this._quantidade
    }

    get valor (): Number {
        return this._valor
    }
}