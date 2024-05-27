/*
function saudacao(nome){
    if (typeof nome != `string`) {
        throw new Error("O parametro deve ser uma string");
        
    }else{
        console.log(`Oi ${nome}`)
    }
}
saudacao(`gilson`);
saudacao(100);
saudacao(`executou!!!`);
*/


//let b = 10;
/*
try {
    let a = 2 + b;
} catch(error){
    console.log(error)
}
console.log("teste");
*/

/*
const reg1 = new RegExp(`Bola`);
console.log(reg1.test("Tem bola"));
console.log(reg1.test("Tem Bola"));
console.log(reg1.test("Não tem"));

const reg2 = /Bola/;
console.log(reg2.test("Tem Bola"));
console.log(reg2.test("Não tem"));
*/



/*
const reg1 = /[12345]/;
console.log(reg1.test("Temos o numero 6"));
console.log(reg1.test("Temos o numero 5"));
*/

/*
const dia = /\d\d/;

console.log(dia.test("2019") && "2019".length == 2);
console.log(dia.test("asd"));
console.log(dia.test("05") && "05".length == 2);
console.log(dia.test("asd1"));

const palavrasPeloMenosTresLetras = /\w\w\w/;

console.log(palavrasPeloMenosTresLetras.test("asd"));
console.log(palavrasPeloMenosTresLetras.test("asdd"));
console.log(palavrasPeloMenosTresLetras.test("as"));
*/


/*
const notab = /[^ab]/;

console.log(notab.test("a"));
console.log(notab.test("Aqui tem a"));
// NEGA APENAS A OU B DE FORMA ISOLADA

const nottoaz = /[^a-z]/;
// PADRÃO QUE NÃO CONTENHA CARACTERES NESTE INTERVALO

console.log(nottoaz.test("123 as"));
console.log(nottoaz.test("asdasfdfsfeeqweqeqwes"));
*/



/*
const cep = /\d{5}-\d{3}/;
// PRIMEIRA PARTE 5 E A SEGUNDA 3

console.log(cep.test("88117-500"));
console.log(cep.test("asd"));
console.log(cep.test("881-50"));
console.log(cep.test("99999-999"));

const tel = /\(\d{2}\)\d{4,5}-\d{4}/;


console.log(tel.test("(48)9999-9999"));
console.log(tel.test("(48)55555-4444"));

const digitos = /\d+/;

console.log(digitos.exec("Temos o numero 100 aqui"));
console.log(digitos.exec("Temos o numero aqui"));
*/


const validaDominio = /[?www.]\w+\.com.br|.com/;

console.log(validaDominio.test("www.google.com"));
console.log(validaDominio.test("www.horadecodar.com.br"));
console.log(validaDominio.test("www.horadecodar"));
console.log(validaDominio.test("horadecodar.com.br"));



