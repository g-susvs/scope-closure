var a; // declaramos
var b = 'b' // declaramos y asignamos
var a = 'aa'; // redeclaramos

var apple = 'apple';

const bestFruits = () => console.log(apple); // global
bestFruits();

function bestCountrie(){
    countrie = 'Perú' // asignamos globalmente
    console.log(countrie)
}

bestCountrie()
console.log(countrie)