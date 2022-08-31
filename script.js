let lista3 = ['🤡', '🤡', '👽', '👽'];
//trocar um elemento da lista por outro
/*lista3[2] = '🤡';

for(let i=0; i<4; i++){
    if(lista3[i] === '👽'){
        lista3[i] = '🤡'
    }
}*/

//programação funcional
//map - mapear objetos, é possivel modificar cada elemento de uma lista
//let novalista = lista3.map((item) => '👽')
                                    //se 👽 for = '🤡' retorna 👽, se não (:) retorna item
//let novalista = lista3.map((item) => (item === '🤡'?'👽':item))
//ou
/*novalista = lista3.map(function (item){
    if(item === '🤡')
       return '👽';
    return item;
})*/

//console.log(novalista);

//contar quantos emojis de palhaço tem na lista 
//let novalista = lista3.map((item) => (item === '🤡'?1:0))
//acumulador
//let total = novalista.reduce((soma, item) => soma + item)
//console.log(total)

//filtrar apenas os emojis de palhaço, vai aparecer apenas esses emojis
//let novaLista = lista3.filter((item) => item === '🤡')
//console.log(novaLista);

//função de procurar
/*let resultado = lista3.find((item) => item === '🤡')
console.log(resultado);

let posicao = lista3.findIndex((item) => item === '🤡')
console.log(posicao);*/

//1 = quantidade de vezes que ele vai pular antes de preencher os elementos
//lista3.fill('🐸', 1);
//console.log(lista3);

//saber se tem '🐸' na lista, a resposta vai ser true or false
let resultado = lista3.some((item) => item === '🐸');
console.log(resultado);
resultado = lista3.some((item) => item === '🤡');

//saber se todos os elementos que tem na lista são 🤡
resultado = lista3.every((item) => item === '🤡');
console.log(resultado)