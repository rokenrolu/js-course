console.log(Number('42'), Number('42.5'), Number(''), Number(' 7 '));
console.log(Number('12px'), Number(null), Number(undefined), Number(true));
console.log(parseInt('12px'), parseFloat('3.75 кг'), parseInt('px12'));
console.log(+'15', +'abc');

console.log(String(42), String(null), String([1, 2]), (255).toString(16));
console.log(Boolean(0), Boolean(''), Boolean(' '), Boolean('0'));
console.log(Boolean([]), Boolean({}), Boolean(null), Boolean(NaN));

console.log("'5' + 3 =", '5' + 3);
console.log("'5' - 3 =", '5' - 3);
console.log("'5' * '2' =", '5' * '2');
console.log('true + 1 =', true + 1);
console.log("[] + {} =", [] + {});
console.log("'Итого: ' + 2 + 3 =", 'Итого: ' + 2 + 3);

console.log(NaN === NaN);
console.log(isNaN('abc'), Number.isNaN('abc'), Number.isNaN(Number('abc')));

const raw = '1 250,50 ₽';
const cleaned = raw.replace(/[^\d,.-]/g, '').replace(',', '.');
const priceValue = Number(cleaned);
console.log(cleaned, priceValue, Number.isNaN(priceValue));
