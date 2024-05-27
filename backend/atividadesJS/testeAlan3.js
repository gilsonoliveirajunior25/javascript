const reg = /\w+: (nomedamarca|Nike|Adidas|Puma|Asics)/

console.log(reg.test("marca: Nike"))
console.log(reg.test("marca: Adidas"))
console.log(reg.test("marca: lacoste"))