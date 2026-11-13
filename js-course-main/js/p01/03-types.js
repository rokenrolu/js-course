console.log(typeof 42);
console.log(typeof 'Клавиатура');
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof 12345678901234567890n);
console.log(typeof Symbol('id'));
console.log(typeof { name: 'Мышь' });

let value = 10;
console.log(value, typeof value);
value = "десять";
console.log(value, typeof value);

console.log(1 / 0, -1 / 0);
console.log('abc' * 2);
console.log(typeof NaN);
console.log(Number.MAX_SAFE_INTEGER);
console.log(9007199254740992 + 1); 
console.log(9007199254740992n + 1n);


const name = 'Клавиатура';
const model = "K-120";
const price = 1250;
const line = `${name} ${model} стоит ${price} RUB`;
console.log(line);
console.log(`Через год: ${price * 1.1} RUB`);

let coupon;
let manager = null;
console.log(coupon, manager);
console.log(typeof [1, 2, 3], Array.isArray([1, 2, 3]));