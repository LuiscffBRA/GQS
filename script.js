// 1. Somar Elementos de um Array
function somarArray(arr) {
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i];
    }
    return soma;
}

// 2. Verificar se um Número é Primo
function numeroPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// 3. Contar Vogais em uma String
function contarVogais(str) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;
    for (let char of str.toLowerCase()) {
        if (vogais.includes(char)) {
            contador++;
        }
    }
    return contador;
}

// 4. Inverter uma String
function inverterString(str) {
    let invertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }
    return invertida;
}

// 5. Encontrar o Fatorial de um Número
function fatorial(n) {
    if (n === 0 || n === 1) return 1;
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

// 6. Encontrar o Maior Número em um Array
function maiorNumero(arr) {
    let maior = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maior) {
            maior = arr[i];
        }
    }
    return maior;
}

// 7. Verificar Palíndromo
function palindromo(str) {
    const strInvertida = inverterString(str);
    return str === strInvertida;
}

// 8. Ordenar um Array em Ordem Crescente
function ordenarArray(arr) {
    return arr.sort((a, b) => a - b);
}

// 9. Contar Ocorrências de um Caractere em uma String
function contarOcorrencias(str, char) {
    let contador = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            contador++;
        }
    }
    return contador;
}

// 10. Encontrar a Média de um Array
function mediaArray(arr) {
    const soma = somarArray(arr);
    return soma / arr.length;
}

// Testes
console.log(somarArray([1, 2, 3, 4, 5])); // 15
console.log(numeroPrimo(7)); // true
console.log(contarVogais('javascript')); // 3
console.log(inverterString('hello')); // 'olleh'
console.log(fatorial(5)); // 120
console.log(maiorNumero([10, 5, 8, 20, 3])); // 20
console.log(palindromo('radar')); // true
console.log(ordenarArray([3, 1, 4, 2, 5])); // [1, 2, 3, 4, 5]
console.log(contarOcorrencias('javascript', 'a')); // 2
console.log(mediaArray([1, 2, 3, 4, 5])); // 3