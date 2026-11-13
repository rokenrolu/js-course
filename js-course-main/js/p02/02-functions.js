function greet() {
    console.log('Добро пожаловать в магазин!');
}
 
greet();
greet();

console.log(greet);
console.log(typeof greet);

const sayBye = function () {
    console.log('Спасибо за покупку!');
};
sayBye();
 
const alsoBye = sayBye;   // вторая ссылка на ту же функцию
alsoBye();
console.log(alsoBye === sayBye);

function repeat(times, action) {
    for (let i = 0; i < times; i++) {
        action();
    }
}
 
repeat(3, greet);


