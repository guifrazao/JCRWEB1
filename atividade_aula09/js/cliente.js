class Cliente{
    constructor(nome, endereco){
        this.nome = nome.toUpperCase();
        this.endereco = endereco.toUpperCase();
        this.contas = [];
    }

    adicionarConta(conta){
        this.contas.push(conta);
    }

    mostrarContas(){
        for(conta of this.contas){
            alert("Número: " + conta.getNumero() + ", Agência: " + conta.getAgencia() + ", Saldo: " + conta.getSaldo());
        }
    }

    getNome(){
        return this.nome;
    }
    setNome(nome){
        this.nome = nome
    }
    getEndereco(){
        return this.endereco;
    }
    setEndereco(endereco){
        this.endereco = endereco
    }
    getContas(){
        return this.contas;
    }

}