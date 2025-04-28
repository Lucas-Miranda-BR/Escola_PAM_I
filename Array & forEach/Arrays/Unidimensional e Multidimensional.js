// Unidimensional

let gatos = [
    'Rajado',
    'Ciames',
    'Calico'
];
console.log(gatos);

// Multidimensional

let lista_coisas = [];

lista_coisas['frutas'] = [];

lista_coisas['frutas'][0] = 'Banana';
lista_coisas['frutas'][1] = 'Uva';

lista_coisas['pessoas'] = [];

lista_coisas['pessoas']['a'] = 'José';
lista_coisas['pessoas']['b'] = 'Maria';

// incluir elemento no array multidimensional

lista_frutas['frutas'].push('Pera');

//remove elemento do array multidimensional

lista_frutas['frutas'].shift('Pera');


console.log(lista_frutas);


console.log(lista_coisas);
