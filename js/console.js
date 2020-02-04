console.group("Essas sao nossas mensagens");
console.log("eu sou uma msg");
console.error("eu sou um erro");
console.warn("eu sou um aviso")

var num = 12;

if(num > 10){
    console.log("numero nao pode ser maior q 10");
}

console.assert(num<=10, "o numero nao pode ser maior que 10");
console.groupEnd();

console.table([
    [1,2,3],
    [2,4,6]
]);

console.table([
    {nome:"Alura", num:35},
    {nome:"Deco", num: 42}
]);