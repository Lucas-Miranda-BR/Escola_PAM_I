/* 
Spread Operator, "desempacota" elementos, transformando-os em argumentos unícos
... (array / string)
*/

let cats = [
    {
        name: "itsuni",
        age: 1,
        age: 20
    },
    {
        name: "itori",
        id: 2,
        age: 15
    },
];

console.log(`Oldest: ${Math.max(...cats.map(ages => ages.age))}`)


let list1 = [0, 1, 2];
let list2 = [3, 4, 5];

const listAll = [...list1, ...list2];

console.log(`Junção ${listAll}`);

let copySO = [... list1];
console.log(`Copia simples de list1 ${copySO}`);

let copy = list1;
console.log(`Vinculado a list1 ${copy}`);

// Diferença = Existe um vinculo entre "Copy" e "list1", ou seja, ao alterar um, o outro será alterado

const numbers = [1, 2, 3];

function sum(a, b, c){
    return a + b + c;
}

console.log(`Soma: ${sum(...numbers)}`);



