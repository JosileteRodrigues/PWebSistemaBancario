class ContaController {
    constructor(contas) {
        this.inputNumero =
            document.querySelector("#conta");
        this.inputSaldo =
            document.querySelector("#saldo");
        this.contas = contas;
    }
    inserir(evento) {
        evento.preventDefault();
        let novaConta = new Conta(this.inputNumero.value, parseFloat(this.inputSaldo.value));
        this.contas.inserir(novaConta);
        this.inserirContaNoHTML(novaConta);
    }
    listar() {
        this.contas.listar().forEach(conta => {
            this.inserirContaNoHTML(conta);
        });
    }
    inserirContaNoHTML(conta) {
        const divContas = document.querySelector(".contas");
        const elementoP = document.createElement('p');
        elementoP.textContent = conta.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event) => {
            console.log('removendo conta ' + conta.toString());
            this.contas.remover(conta.numero);
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        divContas.appendChild(elementoP);
    }
}
