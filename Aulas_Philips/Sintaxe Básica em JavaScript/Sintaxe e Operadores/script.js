/* 
## Atividade

- Crie uma função que recebe dois números como parâmetros.
- Confira se os números são iguais.
- Confira se a soma dos números é maior que 10 ou menor que 20.
- Retorne uma string dizendo "Os números `num1` e `num2` não/são iguais. Sua soma é `soma`, que é `maior/menor` que 10 e `maior/menor` que 20".

Exemplo:

```
Input: 1, 2
Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.
```
*/

function AtividadePratica(){
    alert("Vamos realizar a Atividade!\n");
// - Crie uma função que recebe dois números como parâmetros.
    var num1 = Number(prompt("Digite o primeiro numero: \n"));
    var num2 = Number(prompt("Digite o segundo numero: \n"));
    
    var result;
    var resultComparar;
    var resultado = num1 + num2;


//- Confira se os números são iguais.
  
        num1 == num2 ? result = "sao iguais" : result = "nao sao iguais";
  
//- Confira se a soma dos números é maior que 10 ou menor que 20.
        if ( resultado < 20 && resultado > 10 )   {
            resultComparar = "que é maior que 10 e menor que 20";
        }
        else if (resultado < 20 && resultado < 10){
            resultComparar = "que é menor que 10 e menor que 20";
        }
        else if (resultado > 20 && resultado > 10){
            resultComparar = "que é maior que 10 e maior que 20";
        }
//- Retorne uma string dizendo "Os números `num1` e `num2` não/são iguais. Sua soma é `soma`, que é `maior/menor` que 10 e `maior/menor` que 20".
   alert(`Os números ${num1} e ${num2} ${result}, Sua soma é ${resultado}, ${resultComparar}`);
}

AtividadePratica();
