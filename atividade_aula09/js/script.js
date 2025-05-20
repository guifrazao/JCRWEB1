let clientesCadastrados = []
let clienteAtual = null;

while(true){
    let opcao = window.prompt("1 - Cadastrar Cliente\n2 - Fazer login");
    if(opcao === "1"){
        menuCadastrarCliente();
    }else if(opcao === "2"){
        menuLogin();
    }else{
        alert("Opção inválida")
    }
}

function menuCadastrarCliente(){
    let nome = window.prompt("Nome do cliente: ");
    let endereco = window.prompt("Endereço do cliente: ");

    let cliente = new Cliente(nome, endereco);
    clientesCadastrados.push(cliente);
    alert("Cliente cadastrado com sucesso");
}

function menuLogin(){
    let nome = window.prompt("Digite seu nome para fazer o login: ");
    let cliente = buscarCliente(nome);
    if(cliente){
       clienteAtual = cliente;
       alert("Login efetuado com sucesso");
       menuPrincipal();
    }else{
        alert("Login inválido");
    }
}

function menuPrincipal(){
    while(true){
        let opcao = window.prompt("1 - Criar conta\n2 - Mostrar contas\n3 - Calcular taxa");
        if(opcao === "1"){
            menuCriarConta();
        }else if(opcao === "2"){
            clienteAtual.mostrarContas();
        }
    }
}

function menuCriarConta(){
    let tipo = window.prompt("Tipo da conta (1 - Poupança, 2 - Corrente): ");
    let numero = window.prompt("Número da conta: ");
    let agencia = window.prompt("Agência da conta: ");
    let saldoInicial = window.prompt("Saldo inicial: ");
    if(tipo === "1"){
        conta = new Poupanca(numero, agencia, saldoInicial);
    }else{
        conta = new Corrente(numero, agencia, saldoInicial);
    }

    clienteAtual.adicionarConta(conta);
}

function buscarCliente(nome){
    nome = nome.toUpperCase();
    for(cliente of clientesCadastrados){
        if(nome === cliente.nome){
            return cliente;
        }
    }
    return null
}