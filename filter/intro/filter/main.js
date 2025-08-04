let caixa = [
    {
        tipo: "Bola",
        cor: "Preto"
    },
    {
        tipo: "Triangulo",
        cor: "Preto"
    },
    {
        tipo: "Bola",
        cor: "Branco"
    },
    {
        tipo: "Triangulo",
        cor: "Branco"
    }
];

let filtered_preto = caixa.filter(objeto => objeto.cor == "Preto");

// Output = Apenas objetos com cores "Preto"