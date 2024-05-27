let minhaArray = ["item1", "item2", "item3", "item4", "item5"];

// Acessar os itens de índice 1, 3 e 4
let item1 = minhaArray[1];
let item3 = minhaArray[3];
let item4 = minhaArray[4];

console.log(minhaArray[1])
console.log(minhaArray[3])
console.log(minhaArray[4])


let array = ["1", "2"]
let array2 = ["3", "4", "5", "6"]

console.log(array.length)
console.log(array2.length)




let onibus = {
    rodas: 8,
    limitePasssageiros: 40,
    portas: 2,
};

console.log(onibus)

onibus.janelas = 20;

console.log(onibus)

let nomes = ["Artur", "Mateus", "Fabio", "Sued", "Itala"];

let buscar = nomes.findIndex(function(elemento){
    return elemento === "Artur";
});

if(buscar == 0){
    console.log("Artur esta na posição 0 do array 😁")
}
console.log(buscar);

let arrayComMaisDe5 = ["a", "b", "c", "d", "e", "f"];
let arrayComMenosDe5 = ["a", "b", "c"];

function verificarElementos(array) {
    if (array.length < 5) {
        console.log("Poucos elementos");
    } else {
        console.log("Muitos elementos");
    }
}

verificarElementos(arrayComMaisDe5); 
verificarElementos(arrayComMenosDe5);

let Array = ["item1", "item2", "item3", "item4", "item5"];

for (let i = 0; i < Array.length; i++) {
    console.log(Array[i]);
}

let pessoa = {
    "nome": "Artur",
    "sobrenome": "Brasil",
    "idade": 24,
    "hobbies": ["Cinema", "Praia", "Correr"]
}

pessoa.altura = 1.83;

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto)
let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON);

console.log(pessoaJSON.hobbies[0])

let texto = ["Olá ","Mundo"];

texto.forEach(textos =>{
    console.log(textos)
})


let calc = {
    soma: function(num1, num2){
        return num1 + num2;
    },
    
    subtrair: function(num1, num2){
        return num1 - num2;
    },

    multiplicar: function(num1, num2){
        return num1 * num2;
    },

    dividir: function(num1, num2){
        if(num2 !== 0){
            return num1 / num2;
        } else {
            return "Não é possível dividir por zero!";
        }
    }
};

console.log("Soma:", calc.soma(5, 3));
console.log("Subtrair:", calc.subtrair(10, 4));
console.log("Multiplicar:", calc.multiplicar(6, 4));
console.log("Dividir:", calc.dividir(10, 2));
console.log("Dividir por zero:", calc.dividir(10, 0));