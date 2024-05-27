const reg = /[A-Z]+$/

console.log(reg.test("GILSOn"));
console.log(reg.test("GILSON"));
console.log(reg.test("xid"));

const reg01 = /[id]+$/

console.log(reg.test("gilson"))
console.log(reg.test("GILSON"))
console.log(reg.test("123"))

const reg02 = /\w+: (Nike|Adidas|Puma|Asics)/

console.log(reg.test("Nike"))
console.log(reg.test("Adidas"))
console.log(reg.test("lacoste"))