let alunos = [
    "Pombinha da Silva",
	"Barraqueira da Silva",
	"Discórdia da Silva"
];

for (let i = 0; i < alunos.length; i++) {
    alunos[i] = alunos[i].replace('da Silva', 'da Paz');
    
}
console.log(alunos);