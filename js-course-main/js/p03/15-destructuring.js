const product = {
    name: 'Клавиатура',
    price: 1250,
    dimensions: { width: 44, height: 3 },
};
 
const { name, price } = product;
const { price: cost, stock = 0 } = product;      // переименование и значение по умолчанию
const { dimensions: { width } } = product;       // вложенная деструктуризация
const { name: title, ...rest } = product;        // остальные свойства
 
console.log(name, price, cost, stock, width);
console.log(rest);

function renderLine({ name, price, dimensions: { width = 0 } = {} }) {
    return `${name}: ${price} ₽, ширина ${width} см`;
}
console.log(renderLine(product));
console.log(renderLine({ name: 'Кабель', price: 300 }));

const [first, , third = 'нет'] = ['Клавиатура', 'Мышь'];
console.log(first, third);
 
let a = 1, b = 2;
[a, b] = [b, a];
console.log('a =', a, 'b =', b);

