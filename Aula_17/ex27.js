let amigo = {nome: 'Joao', sexo: 'M', peso: 60, 
engordar(p){
    console.log('Engordou') 
    this.peso += p
    }
};

amigo.engordar(0);
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`);