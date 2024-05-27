const reg = /[A-Z]+$/

console.log(reg.test("Marcos"))
console.log(reg.test("MARCOS"))
console.log(reg.test("xid"))