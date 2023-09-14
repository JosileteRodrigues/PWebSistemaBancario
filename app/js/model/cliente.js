class Cliente {
    constructor(nome, cpf, conta) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }
    get nome() {
        return this._nome;
    }
    get cpf() {
        return this._cpf;
    }
    get conta() {
        return this._conta;
    }
    set nome(nome) {
        this._nome = nome;
    }
    set cpf(cpf) {
        this._cpf = cpf;
    }
    set conta(conta) {
        this._conta = conta;
    }
    toString() {
        return `Nome: ${this._nome} - CPF: ${this.cpf} - 
        Conta: N° ${this._conta.numero} Saldo ${this._conta.saldo}`;
    }
}
