class ClienteController {
    constructor(clientes, contas) {
        this.nomeInput =
            document.querySelector("#nome");
        this.cpfInput =
            document.querySelector("#cpf");
        this.contaInput =
            document.querySelector("#conta");
        this.clientes = clientes;
        this.contas = contas;
    }
    inserir(evento) {
        console.log("OLA");
        evento.preventDefault();
        const conta = this.contas.pesquisar(this.contaInput.value);
        let novoCliente = new Cliente(this.nomeInput.value, this.cpfInput.value, conta);
        console.log(novoCliente);
        this.clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
    }
    listar() {
        console.log(this.clientes.listar());
        this.clientes.listar().forEach(cliente => {
            this.inserirClienteNoHTML(cliente);
        });
    }
    inserirClienteNoHTML(cliente) {
        const divCLiente = document.querySelector(".clientes");
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event) => {
            console.log('removendo conta ' + cliente.toString());
            this.clientes.remover(cliente.cpf);
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        divCLiente.appendChild(elementoP);
    }
}
