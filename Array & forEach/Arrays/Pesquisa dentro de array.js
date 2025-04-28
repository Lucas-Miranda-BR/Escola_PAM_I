let lista_frutas = [];

lista_frutas[0] = 'Banana';
lista_frutas[1] = 'Uva';
lista_frutas[2] = 'Laranja';
lista_frutas[3] = 'Maçã';

const existe = lista_frutas.indexOf('Laranja');

if (existe)
	console.log(`Fruta existe na posicao: ${existe}`);
else 
	console.log('Fruta não existe');

    // indexOf() = Retorna a primeira vez que encontrar o elemento pesquisado