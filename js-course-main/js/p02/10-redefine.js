let formatPrice = (p) => p + ' руб.';
console.log(formatPrice(100));
 
formatPrice = (p) => p.toFixed(2) + ' ₽';
console.log(formatPrice(100));

let showWelcome = function () {
    console.log('Первый визит: покажем подсказки');
    showWelcome = function () {
        console.log('Повторный визит: подсказки не нужны');
    };
};
 
showWelcome();
showWelcome();
showWelcome();


