function showPrice(name, price) {
    console.log(`${name}: ${price} ₽`);
}
 
showPrice('Клавиатура', 1250);
showPrice('Мышь', 790);

showPrice('Коврик');
showPrice('Кабель', 300, 'лишний аргумент');

function applyDiscount(price, percent = 0) {
    return price - price * percent / 100;
}
 
console.log(applyDiscount(1000));
console.log(applyDiscount(1000, 15));
console.log(applyDiscount(1000, undefined));
console.log(applyDiscount(1000, null));

function sum(...prices) {
    console.log('пришло:', prices);
    let total = 0;
    for (const p of prices) total += p;
    return total;
}
 
console.log(sum(100, 200, 300));
console.log(sum());

const cartPrices = [1250, 790, 300];
console.log(sum(...cartPrices));
console.log(Math.max(...cartPrices));

