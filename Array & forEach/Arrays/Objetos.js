var zoo = [
    {
        name: "Anto",
        specie: "Tatu",
        color: "Marrom claro"
    },
    {
        name: "Asu",
        specie: "Falcão",
        color: "Branco e Marrom"
    },
    {
        name: "Inx",
        specie: "Gato",
        color: "Cinza claro"
    },
]
zoo.forEach(animal => {
    console.log(`Nome: ${animal.name} - Especie: ${animal.specie} - Cor: ${animal.color}`)
});