// Strings

let lista_frutas = [];

lista_frutas[0] = 'Banana';
lista_frutas[1] = 'Uva';
lista_frutas[2] = 'Laranja';
lista_frutas[3] = 'Maçã';

lista_frutas.sort();

// Números

let lista_numeros = [];

lista_numeros[0] = 1;
lista_numeros[1] = 12;
lista_numeros[2] = 40;
lista_numeros[3] = 3;
lista_numeros[4] = 7;
lista_numeros[5] = 19;

lista_numeros.sort(ordenarNumeros);

function ordenarNumeros(a, b){
	return a - b
}

