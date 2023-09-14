class Cliente{
    private _nome: string;
    private _cpf: string;
    private _conta: Conta

    constructor(nome: string, cpf: string, conta: Conta){
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }

    get nome(){
        return this._nome;
    }

    get cpf(){
        return this._cpf;
    }

    get conta(){
        return this._conta;
    }

    set nome(nome: string){
        this._nome = nome;
    }

    set cpf(cpf: string){
        this._cpf = cpf;
    }

    set conta(conta: Conta){
        this._conta = conta;
    }

    toString(): string {
        return `Nome: ${this._nome} - CPF: ${this.cpf} - 
        Conta: N° ${this._conta.numero} Saldo ${this._conta.saldo}`;
    }
}