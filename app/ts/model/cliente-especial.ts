class clienteEspecial extends Cliente{
    private dependencies: Array<Cliente>

    constructor(nome: string, cpf:string, conta: Conta){
        super(nome, cpf, conta);
        this.dependencies = new Array<Cliente>()
    }
}