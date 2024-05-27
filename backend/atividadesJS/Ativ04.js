const nome = /\w+["A-Z"]/;

console.log(nome.test("meu nome gilson"));
console.log(nome.test("MEU NOME É GILSON"));
console.log(nome.test("meu nome GILSON"));

const string = /\w+[]/;

console.log(string.test("meu nome"));
console.log(string.test(123));
console.log(string.test("meu nome" ,123));