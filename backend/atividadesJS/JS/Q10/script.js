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
