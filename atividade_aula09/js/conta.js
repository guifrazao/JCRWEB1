class Conta{
    constructor(numero, agencia, saldo){
        this.numero = numero;
        this.agencia = agencia;
        this.saldo = saldo;
        this.calcTaxa = null;
    }

    getNumero(){
        return this.numero;
    }
    setNumero(numero){
        this.numero = numero;
    }
    getAgencia(){
        return this.agencia;
    }
    setAgencia(agencia){
        this.agencia = agencia;
    }
    getSaldo(){
        return this.saldo;
    }
    setSaldo(saldo){
        this.saldo = saldo;
    }
    getCalcTaxa(){
        return this.calcTaxa;
    }
    setCalcTaxa(calcTaxa){
        this.calcTaxa = calcTaxa;
    }
}