console.log('Curso Técnico de Tecnologia da informação');
let valor1 = 5;
let valor2 = 6;
let soma = valor1 + valor2;
let nome = 'Leandro';
let dados = [2024, 'Tecnico', 6.0, 'TI'];
let titulo = document.getElementById('titulo').innerHTML = 'Texto Alterado';
console.log('O valor 1 é: ' + valor1);
console.log('O valor 2 é: ' + valor2);
console.log('A soma dos valores é: ' + soma);
console.log('O seu nome é: ' + nome);
console.log('Os dados do Array são: ' + dados);
console.log('O terceiro valor do array é: ' + dados[2]);
if (nome === 'Leandro' && dados[2] >= 7.0) {
    console.log('Parabéns');
    } else {
        console.log('Não foi dessa vez');
    }
console.log(titulo);    
// alert('Seja bem vindo!' + nome);