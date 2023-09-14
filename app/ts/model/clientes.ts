class Clientes {
    private clientes: Array<Cliente>;
    private contas: Contas
    constructor() {
        this.clientes = new Array<Cliente>()
    }

    inserir(cliente: Cliente): void {

        this.clientes.push(cliente);
    }

    remover(cpf: string): void {
        const clienteARemover = this.pesquisar(cpf);
        if (clienteARemover) {
            const indiceCliente = this.clientes.indexOf(clienteARemover);
            if (indiceCliente > -1) {
                this.clientes.splice(indiceCliente, 1);
            }
        }
    }

    pesquisar(cpf: string): Cliente {
        return this.clientes.find(
            cliente =>cliente.cpf === cpf
        );
    }

    listar(): Array<Cliente> {
        return this.clientes;
    }
}