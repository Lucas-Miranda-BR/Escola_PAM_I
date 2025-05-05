let array = [];

array[0] = 5;
array[1] = 3;
array[2] = 8;
array[3] = 1;
array[4] = 2;

array.sort(ordenarNumeros);

function ordenarNumeros(a, b){
	return a - b
}

array.forEach(element => {
    console.log(array.sort(ordenarNumeros));
});
