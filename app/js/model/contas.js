class Contas {
    constructor() {
        this.contas = new Array();
    }
    inserir(conta) {
        this.contas.push(conta);
    }
    remover(numero) {
        const contaARemover = this.pesquisar(numero);
        if (contaARemover) {
            const indiceConta = this.contas.indexOf(contaARemover);
            if (indiceConta > -1) {
                this.contas.splice(indiceConta, 1);
            }
        }
    }
    pesquisar(numero) {
        return this.contas.find(conta => conta.numero === numero);
    }
    listar() {
        return this.contas;
    }
}
