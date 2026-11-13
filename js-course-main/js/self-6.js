const prices = [450, 990, 1250, 780, 2100, 320, 1500, 890];

// Сумма и максимум
let sum = 0;
let max = prices[0];
for (let i = 0; i < prices.length; i++) {
    sum += prices[i];
    if (prices[i] > max) max = prices[i];
}
const avg = sum / prices.length;
console.log('Сумма:', sum, 'Максимум:', max, 'Среднее:', avg);

// Дороже средней
const aboveAvg = [];
for (let i = 0; i < prices.length; i++) {
    if (prices[i] > avg) aboveAvg.push(prices[i]);
}
console.log('Дороже средней:', aboveAvg);

// Индекс первой цены выше 1000 или -1
let firstIndex = -1;
for (let i = 0; i < prices.length; i++) {
    if (prices[i] > 1000) { firstIndex = i; break; }
}
console.log('Индекс первой > 1000:', firstIndex);