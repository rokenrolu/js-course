function withVat(price, rate = 20) {
    return price + price * rate / 100;
}
 
const a = withVat(1000);
const b = withVat(500) + withVat(250);
console.log(a, b);

function logPrice(price) {
    console.log('цена:', price);
}
 
const result = logPrice(100);
console.log('результат:', result);

function formatPrice(value) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
        return 'цена не указана';
    }
    return value.toFixed(2).replace('.', ',') + ' ₽';
    console.log('эта строка никогда не выполнится');
}
 
console.log(formatPrice(1250.5));
console.log(formatPrice('abc'));

function calcCart(prices) {
    let total = 0;
    for (const p of prices) total += p;
    return { total, count: prices.length, average: total / prices.length };
}
 
const stats = calcCart([1250, 790, 300]);
console.log(stats);
console.log('среднее:', stats.average);

