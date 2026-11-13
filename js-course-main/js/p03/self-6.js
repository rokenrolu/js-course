'use strict';

function Product(name, price) {
    this.name = name;
    let _price = price;

    Object.defineProperty(this, 'price', {
        get() { return _price; },
        set(value) {
            if (typeof value !== 'number' || value < 0) {
                throw new RangeError(`Некорректная цена: ${value}`);
            }
            _price = value;
        },
        enumerable: true,
        configurable: false,
    });

    Object.defineProperty(this, 'formattedPrice', {
        get() { return `${_price.toFixed(2)} ₽`; },
        enumerable: true,
    });
}

const p = new Product('Мышь', 790);
console.log(p.price, p.formattedPrice); // 790 790.00 ₽

p.price = 690;
console.log(p.formattedPrice); // 690.00 ₽

try {
    p.price = -5;
} catch (e) {
    console.log('Ошибка:', e.message); // Некорректная цена: -5
}

// formattedPrice только для чтения: сеттера нет
try {
    p.formattedPrice = '100 ₽';
} catch (e) {
    console.log('Ошибка:', e.message);
}