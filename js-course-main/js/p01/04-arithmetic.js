console.log(7 + 2, 7 - 2, 7 * 2, 7 / 2);
console.log(7 % 2, 2 ** 10);
console.log(2 + 3 * 4, (2 + 3) * 4);
console.log(-7 % 3, 7 % -3);

let a = 5;
let b = a++;
console.log('a =', a, 'b =', b);

let c = 5;
let d = ++c;   
console.log('c =', c, 'd =', d);

let total = 1000;
total += 250;
total -= 100;
total *= 2;
total /= 4;
console.log('total =', total);

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);
const price = 1250.5;
const discounted = price * (1 - 15 / 100);
console.log('3 шт. со скидкой:', discounted * 3);

const priceKop = 125050;
const discountKop = Math.round(priceKop * 85 / 100);
const totalKop = discountKop * 3;
console.log('Итого:', (totalKop / 100).toFixed(2), '₽');
console.log(typeof (totalKop / 100).toFixed(2));
