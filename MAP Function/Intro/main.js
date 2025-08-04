// Criação de um Map

let map = new Map();

// Definindo chaves de um Map

map.set("name", "Ann");
map.set("age", 22);
map.set("isAdult", true);
map.set("wage", 1875.35);

console.log(map);

// Verificação da existencia de uma chave dentro de um Map

console.log(`Existe a chave "age": ${map.has('age')}`);
console.log(`Existe a chave "gender": ${map.has('gender')}`);

// Deletar uma chave dentro do Map

map.delete("age");
console.log(map);

// Retorna a quantidade de chaves dentro do Map

console.log(map.size)

// Realiza a iteração das chaves do Map Object

for (let key of map.keys()) {
    console.log(key);
}

// Realiza a iteração das valores do Map Object

for (let value of map.values()) {
    console.log(value);
}


