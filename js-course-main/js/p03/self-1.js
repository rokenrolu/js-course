'use strict';

const product = {
    name: 'Клавиатура',
    price: 1250,
    dimensions: { width: 44, height: 3, depth: 13 },
    tags: ['usb', 'rgb'],
    describe() {
        return `${this.name}: ${this.price} ₽, ${this.dimensions.width} см`;
    },
};

console.log(product.describe());

// Передаём метод в переменную — this теряется
const describe = product.describe;
try {
    console.log(describe());
} catch (e) {
    console.log('Ошибка:', e.message); // Cannot read properties of undefined (reading 'name')
}

// Исправление через bind
const boundDescribe = product.describe.bind(product);
console.log(boundDescribe());