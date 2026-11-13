'use strict';
 
function addToCart(name, qty) {
    addToCart.calls++;
    return `${name} x ${qty}`;
}
addToCart.calls = 0;   // своё свойство функции
 
addToCart('Мышь', 1);
addToCart('Клавиатура', 2);
console.log('имя:', addToCart.name, 'параметров:', addToCart.length, 'вызовов:', addToCart.calls);

function describe(currency, suffix) {
    return `${this.name}: ${this.price} ${currency}${suffix}`;
}
 
const keyboard = { name: 'Клавиатура', price: 1250 };
console.log(describe.call(keyboard, '₽', '!'));
console.log(describe.apply(keyboard, ['$', '?']));

const prices = [1250, 790, 300];
console.log('максимум:', Math.max.apply(null, prices));
 
function listArgs() {
    return Array.prototype.join.call(arguments, ' / ');
}
console.log(listArgs('Клавиатура', 'Мышь', 'Коврик'));

