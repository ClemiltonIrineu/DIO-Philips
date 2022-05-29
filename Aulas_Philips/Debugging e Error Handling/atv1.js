/*
## Atividade: validação de erros por tipo

O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. 
Caso contrário, um erro será lançado.

- Crie uma função que recebe um array e um número
- Realize as seguintes validações
  - Se os parâmetros não forem enviados, lance um erro do tipo `ReferenceError`
  - Se o array não for do tipo 'object', lance um erro do tipo `TypeError`
  - Se o número não for do tipo 'number', lance um erro do tipo `TypeError`
  - Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo `RangeError`
- Utilize a declaração `try...catch`
- Filtre as chamadas de catch por cada tipo de erro utilizando o operador `instanceof`

*/
function verificarArray (arr, tam){
    try {
      
      if (!arr && !tam) throw new ReferenceError("Parametros nao enviados!");
    
      if (typeof arr !== "object") throw new TypeError("O array nao e um Object");
  
      if (typeof tam !== "number") throw new TypeError("O Tamanho nao e um Numero");
  
      if (arr.length !== tam) throw new RangeError ("O tamanho expecificado e diferente do tamanho do array");

      return arr;
      
    } catch (e) {
         
          if (e instanceof ReferenceError){
            console.log("Este é um erro do tipo ReferenceError");
            throw e;
          } else if (e instanceof TypeError){
            console.log("Este é um erro do tipo TypeError");
            throw e;
          } else if (e instanceof RangeError){
            console.log("Este é um erro do tipo RangeError");
            throw e;
          } else {
            console.log("ERROR nao esperado");
            throw e;
          }    

    }
  }

  //  console.log (verificarArray());
  //  console.log (verificarArray(3,2));
  //  console.log (verificarArray([],'d'));
    console.log (verificarArray([1, 2, 3, 4, 5], 5));

