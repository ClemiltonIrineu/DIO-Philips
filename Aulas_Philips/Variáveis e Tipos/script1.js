/* Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.

_Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)_
*/

function atv1(){
     alert `Vamos verificar se uma string é um polindromo`
     var verificar = prompt("Digite uma palavra");
     let verificar1 = verificar.split('').reverse().join('');
     console.log(verificar1);
	(verificar === verificar1) ? console.log('A palavra ', verificar, ' é um polindromo') : console.log('A palavra ', verificar, ' não é um polindromo')
   //  (verificar === verificar1) ? alert `A palavra ${verificar} é um polindromo` : alert `A palavra ${verificar} não é um polindromo`
} 

atv1();