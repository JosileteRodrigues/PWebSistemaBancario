class Contas {

    private contas: Array<Conta>;

    constructor() {
        this.contas = new Array<Conta>()
    }

    inserir(conta: Conta): void {
        this.contas.push(conta);
    }

    remover(numero: string): void {
        const contaARemover = this.pesquisar(numero);
        if (contaARemover) {
            const indiceConta = this.contas.indexOf(contaARemover);
            if (indiceConta > -1) {
                this.contas.splice(indiceConta, 1);
            }
        }
    }

    pesquisar(numero: string): Conta {
        return this.contas.find(
            conta => conta.numero === numero
        );
    }

    listar(): Array<Conta> {
        return this.contas;
    }

}
