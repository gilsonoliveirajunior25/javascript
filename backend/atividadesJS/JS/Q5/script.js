let nomes = ["Artur", "Mateus", "Fabio", "Sued", "Itala"];

let buscar = nomes.findIndex(function(elemento){
    return elemento === "Artur";
});

if(buscar == 0){
    console.log("Artur esta na posição 0 do array 😁")
}
console.log(buscar);