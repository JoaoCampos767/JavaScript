var num = [5, 6, 8, 9, 1, 7]

console.log(num);

for(let pos in num){
    // SO FUNCIONA ESSE FOR PARA ARRAY E OBJETOS
    console.log(`A posicao ${pos} tem o valor ${num[pos]}`);
}