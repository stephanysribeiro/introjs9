# Manipulação de Arrays do JS 
## Códigos de exemplo
Como criar um array dentro do JavaScript?
## let - cria váriavel com escopo de vida menor
```javascript
let lista = [1, 2, 3, 4];
let lista2 = ['a', 'b', 'c', 'd'];
let lista3 = ['🤡', '🤡', '👽', '👽'];

```

## MAP
Mapeia cada elemento da lista, passadando por uma função que pode alterar o valor do elemento.
```javascript
let novalista = lista3.map((item) => (item === '🤡'?'👽':item))
```

# REDUCE 
Realiza a redução dos elementos de um array para um único valor, a partir de uma função que recebe dois parâmetros (acumulador, item)
```javascript
let novalista = lista3.map((item) => (item === '🤡'?1:0))
let total = novalista.reduce((soma, item) => soma + item)
console.log(total)
```

## ARROW FUNCTION 
Permite escrever códigos em uma unica linha. 
Função JavaScript, escrita em uma única linha (normalmente) para representar uma lógica simples.
```javascript
parametro => expressão
(parametro) => expressão
(param1, param2) => expressão
(param1, param2) => {
    return valor
}
```
## FILTER 
Função que filtra os elementos a partir de uma outra função que deva retornar verdadeiro ou falso.
```javascript
let novaLista = lista3.filter((item) => item === '🤡')
console.log(novaLista);
```

## FIND
Procura pelo primeiro elemento que a função de busca retornar verdadeiro
```javascript
let resultado = lista3.find((item) => item === '🤡')
console.log(resultado);
```

## FILL
Completa a lista com elementos iguais
```javascript
lista3.fill('🐸', 1);
console.log(lista3);
```

## SOME 
Retorna verdadeiro se exixtir um elemento igual ao utilizado na lógica da função
```javascript
let resultado = lista3.some((item) => item === '🐸');
console.log(resultado);
resultado = lista3.some((item) => item === '🤡');
```
## EVERY 
Retorna verdadeiro se todos os elementos forem iguais ao utilizado na lógica da função
```javascript
resultado = lista3.every((item) => item === '🤡');
console.log(resultado)
```