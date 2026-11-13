const priceKop = 125050; 
const discountPercent = 10;
const kolvo = 3;

// скидка округляем один раз после умножения
const discountedKop = Math.round(priceKop * (100 - discountPercent) / 100);
const totalKop = discountedKop * kolvo;

console.log('цена со скидкой:', (discountedKop / 100).toFixed(2), 'rub');
console.log('итого за', kolvo, 'шт.:', (totalKop / 100).toFixed(2), 'rub');

