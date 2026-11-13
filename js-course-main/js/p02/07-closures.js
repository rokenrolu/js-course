function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}
 
const next = createCounter();
console.log(next(), next(), next());

const counterA = createCounter();
const counterB = createCounter();
counterA();
counterA();
console.log('A:', counterA(), 'B:', counterB());

function createIdGenerator(prefix) {
    let n = 0;
    return () => `${prefix}-${++n}`;
}
 
const nextOrderId = createIdGenerator('ORD');
const nextUserId = createIdGenerator('USR');
console.log(nextOrderId(), nextOrderId(), nextUserId());

function createCart() {
    const items = [];
    return {
        add(name, price) { items.push({ name, price }); },
        total() {
            let sum = 0;
            for (const it of items) sum += it.price;
            return sum;
        },
        count() { return items.length; },
    };
}
 
const cart = createCart();
cart.add('Клавиатура', 1250);
cart.add('Мышь', 790);
console.log('товаров:', cart.count(), 'сумма:', cart.total());
console.log('cart.items =', cart.items);

