'use strict';

function renderLine({ name, price, dimensions: { width = 0 } = {} }) {
    return `${name}: ${price} ₽, ширина ${width} см`;
}

const product = { name: 'Клавиатура', price: 1250, dimensions: { width: 44 } };
const cable   = { name: 'Кабель', price: 300 };

console.log(renderLine(product)); // Клавиатура: 1250 ₽, ширина 44 см
console.log(renderLine(cable));   // Кабель: 300 ₽, ширина 0 см

// Части цепочки нет — безопасное чтение
const email = product?.supplier?.contact?.email ?? 'почта не указана';
console.log(email); // почта не указана

const withSupplier = { ...product, supplier: { contact: { email: 'a@b.ru' } } };
console.log(withSupplier?.supplier?.contact?.email ?? 'почта не указана'); // a@b.ru