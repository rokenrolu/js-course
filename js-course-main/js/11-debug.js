const cartPrices = ['1250', '790', '430'];

function cartTotal(items) {
    // debugger; // программная точка останова
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total = total + Number(items[i]);

    }
    return total;
}
 
console.log('Итого:', cartTotal(cartPrices));

console.warn('Товар заканчивается: осталось 2 шт.');
console.error('Не удалось загрузить отзывы');
