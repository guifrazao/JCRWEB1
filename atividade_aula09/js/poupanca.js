class Poupanca extends Conta{
    constructor(numero, agencia){
        super(numero, agencia);
        this.calcTaxa = 30;
    }
}