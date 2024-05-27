/*
const cachorro = {
     raca: `SRD`,
    uivar: function(){
        console.log("Auuuuu");
    },
    rosnar: function(){
          console.log("GRRR");
    },
    setRaca: function(raca){
        this.raca = raca;
    },
    getRaca: function(){
        return "A raca é:" + this.raca;
    }
}
cachorro.rosnar();
cachorro.uivar();
console.log(cachorro.raca);
cachorro.setRaca('Pastor Alemão');
console.log(cachorro.raca);
cachorro.getRaca();
*/

/*
const pessoa= {
    maos:2,
}
console.log(Object.getPrototypeOf(pessoa));*/

/*
let cachorro = {
    patas: 4,
    raca:`SRD`,

    latir: function(){
        console.log("AU AU");
    }
}
let labrador= Object.create(cachorro);
labrador.latir();
labrador.raca = 'labrador';
console.log(labrador.raca);
console.log(cachorro.raca);

let pastor = Object.create(cachorro);
pastor.raca = 'Pastor Alemão';
console.log(pastor.raca);
*/

/*
function criarCachorro(raca,pata,cor){
    let cachorro = Object.create({});
    cachorro.raca= raca;
    cachorro.pata= pata;
    cachorro.cor= cor;

    return cachorro;
}
let pug = criarCachorro(`pug`,4,`preto`);
console.log(pug);

function cachorro(raca,pata,cor){
    this.raca = raca;
    this.pata = pata;
    this.cor = cor;

    this.uivar = function(){
        console.log("AUU")
    }
}
let pincher = new cachorro('pincher',4,'caramelo');
pincher.uivar();
*/

/*
class cachorro{
    constructor(raca,patas,cor){
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;

    }
}
let labrador = new cachorro('labrador',4,'preto');
console.log(labrador);
*/

/*
class cachorro{
    constructor(raca,patas,cor){
        this.raca = raca;
        this.cor = cor;

    }
    get getCor(){
        return this.cor;
    }
    set setCor(cor){
        this.cor = cor;
    }
}
let pastor = new cachorro ('Pastor Alemão','Preta');
console.log(pastor);
pastor.setCor = 'branco';
console.log(pastor.getCor);
*/

/*
class Mamifero{
    constructor(patas){
        this.patas = patas;
    }
}
class cachorro extends Mamifero{
    constructor(patas,raca){
        super(patas);
        this.raca = raca;
    }
    latir(){
        console.log("AU AU");
    }
}
let pug = new cachorro(4,`pug`);
pug.latir();
*/

