function comparaNumeros(num1, num2) {
   if (!num1 || !num2) return "Defina 2 números."
   const primeiraFrase = criaPrimeiraFrase(num1, num2);
   const segundaFrase = criaSegundaFrase(num1, num2);

   return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
   let saoIguais = '';

   if (num1 !== num2) {
      saoIguais = 'não';
   }

   return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
}

function criaSegundaFrase(num1, num2) {
   const soma = num1 + num2;
<<<<<<< HEAD
   let resultado10 = 'menor que';
   let resultado20 = 'menor que';
=======
   let resultado10 = 'menor';
   let resultado20 = 'menor';
>>>>>>> 213e6f60f6325a2e316a650a73cdb3d44e6609fa
   const compara10 = soma > 10;
   const compara20 = soma > 20;

   if (compara10) {
<<<<<<< HEAD
      resultado10 = 'maior que';
   }

   if (soma == 10) {
      resultado10 = 'igual a';
   }

   if (compara20) {
      resultado20 = 'maior que';
   }
   
   if (soma == 20) {
      resultado20 = 'igual a';
   }

   return `Sua soma é ${soma}, que é ${resultado10} 10 e ${resultado20} 20. `
}

console.log(comparaNumeros(5,3));
=======
      resultado10 = 'maior';
   }

   if (compara20) {
      resultado20 = 'maior';
   }

   return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20. `
}

console.log(comparaNumeros(3, 1));
>>>>>>> 213e6f60f6325a2e316a650a73cdb3d44e6609fa
