/*
console.log(`1`);
setTimeout(function(){
    console.log(`5`);

},7000);
console.log(`2`);
console.log(`3`);
console.log(`4`);
*/

/*
let p = Promise.resolve(5);

console.log("outros códigos");

console.log(p);

p.then((value)=>{console.log(`O valor é: ${value}`)})
*/


/*
async function soma(a,b) {
    return a + b;
}
console.log(soma(2,4));

soma(2,4).then(value => console.log(value));

function somaComAtraso(a,b){
     return new Promise(resolve=>{
        setTimeout(function(){
            resolve(a+b);

        },3000);
    })
}
async function resultadoSoma(a, b , c){
    let x = somaComAtraso(a,b);
    let y = c;

    return await x + y;

}
resultadoSoma(1, 2, 3).then(value=> console.log(value));
*/

/*

function * criarId(){
    let id = 0;
    while(true){
        yield id++;
    }
}
let idCriado = criarId();

console.log(idCriado.next().value);
console.log(idCriado.next().value);
console.log(idCriado.next().value);
console.log(idCriado.next().value);
console.log(idCriado.next().value);
console.log(idCriado.next().value);
console.log(idCriado.next().value);
console.log(idCriado.next().value);
console.log(idCriado.next().value);
console.log(idCriado.next().value);

*/