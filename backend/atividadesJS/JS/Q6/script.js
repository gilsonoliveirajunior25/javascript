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