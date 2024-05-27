
// Ativ 01 ------------

class Conta {
    constructor(saldo){
        this.saldo = saldo
    }
}

Conta.prototype.deposito = function(value){
    value = this.saldo + value
    this.saldo = value
}

Conta.prototype.saque = function(value){
    value = this.saldo - value
    this.saldo = value

}

let novaConta = new Conta(1200)
// console.log(`Valor Inicial: R$${conta}`)
console.log(novaConta)

novaConta.deposito(200)
//console.log(`Valor com deposito: R$${conta}`)
console.log(novaConta)


novaConta.saque(500)
//console.log(`Valor com saque: R$${conta}`)
console.log(novaConta)

// Ativ 02 ------------

class Carrinho {
    constructor() {
        this.itens = [];
        this.valorTotal = 0;
    }

    adicionarItem(item, quant, preco) {
        this.itens.push({ item, quant, preco });
        this.valorTotal += preco * quant;
    }

    removerItem(item) {
        const itemRemovido = this.itens.find(it => it.item === item); // Encontra o item no array
        if (itemRemovido) { // Verifica se o item foi encontrado
            this.itens = this.itens.filter(it => it.item !== item); // Remove o item do array
            this.valorTotal -= itemRemovido.preco * itemRemovido.quant; // Atualiza o valor total
        }
    }
}

let carrinho = new Carrinho();

carrinho.adicionarItem("Computador", 2, 4000);
console.log(carrinho);

carrinho.adicionarItem("TV", 3, 3000);
console.log(carrinho);

carrinho.removerItem("Computador");
console.log(carrinho);

// Ativ 03

class Cliente{
    constructor(rua, bairro, cidade, estado){
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
    }

    set atualizaRua(value) {
        this.rua = value
    } 
    set atualizaBairro(value) {
        this.bairro = value
    } 
    set atualizaCidade(value) {
        this.cidade = value
    } 
    set atualizaEstado(value) {
        this.estado = value
    } 
}

let mateus = new Cliente("Rua do Mateus", "Pirajá", "Salvador", "Bahia")
console.log(mateus)

mateus.atualizaRua = "Rua Nossa Senhora"
mateus.atualizaBairro = "Jardim Nova Esperança"
mateus.atualizaCidade = "Santo Amaro"
mateus.atualizaEstado = "Bahia"

console.log(mateus)


//Ati 04

class Carro {
    constructor(cor, marca, gasolinaRestante){
        this.cor = cor
        this.marca = marca
        this.gasolinaRestante = gasolinaRestante
    }
}

Carro.prototype.dirigir = function(value){
    this.gasolinaRestante -= value
}

Carro.prototype.abastecer = function(value){
    this.gasolinaRestante += value
    
}

let audiR8 = new Carro("Azul", "Audi", 20)
console.log(audiR8)

audiR8.dirigir(16)
console.log(audiR8)

if(audiR8.gasolinaRestante < 5){
    audiR8.abastecer(10)
}

console.log(audiR8)

//Ati 05

class ContaBancaria {
    constructor(saldoCorrente, saldoPoupanca, jurosPoupanca){
        this.saldoCorrente = saldoCorrente
        this.saldoPoupanca = saldoPoupanca
        this.jurosPoupanca = 0.02
    }
}

ContaBancaria.prototype.saqueCorrente = function(value){
    this.saldoCorrente -= value
}

ContaBancaria.prototype.saquePoupança = function(value){
    this.saldoPoupanca -= value
}

ContaBancaria.prototype.depositoCorrente = function(value){
    this.saldoCorrente += value
}

ContaBancaria.prototype.depositoPoupança = function(value){
    this.saldoPoupanca += value
}

ContaBancaria.prototype.transferir = function(value, porcentoJuros){ 
    let juros = value * porcentoJuros
    this.saldoCorrente += value
    this.saldoPoupanca -= value + juros
}

let conta = new ContaBancaria(0,0)
console.log(conta)

conta.depositoCorrente(1000)
conta.depositoPoupança(300)

conta.saqueCorrente(50)
conta.saquePoupança(100)
console.log(conta)

conta.transferir(30, 0.02)
console.log(conta)

class ContaEspecial extends ContaBancaria{
    constructor(saldoCorrente, saldoPoupanca, jurosPoupanca, saldo){
        super(saldoCorrente, saldoPoupanca, jurosPoupanca)
        this.saldo = saldo
    }
}

ContaEspecial.prototype.saqueEspecial = function(value){
    this.saldo -= value
}

ContaEspecial.prototype.depositoEspecial = function(value){
    this.saldo += value
}

ContaEspecial.prototype.transferirEspecial = function(value, porcentoJuros){
    let juros = value * porcentoJuros
    this.saldoCorrente += value
    this.saldo -= value + juros

}

let contaEspecial = new ContaEspecial(conta.saldoCorrente, conta.saldoPoupanca, conta.jurosPoupanca, 5000)
console.log(contaEspecial)

contaEspecial.transferirEspecial(100, conta.jurosPoupanca * 2)
console.log(contaEspecial)

