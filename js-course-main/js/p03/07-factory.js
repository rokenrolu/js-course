function createProduct(name, price, stock = 0) {
    return {
        name,
        price,
        stock,
        isAvailable() { return this.stock > 0; },
    };
}
 
const p1 = createProduct('Клавиатура', 1250, 3);
const p2 = createProduct('Мышь', 790);
console.log(p1.name, p1.isAvailable(), '|', p2.name, p2.isAvailable());
console.log('метод общий?', p1.isAvailable === p2.isAvailable);

function formatPrice(value, options = {}) {
    const currency = options.currency ?? '₽';
    const digits = options.digits ?? 2;
    return value.toFixed(digits) + ' ' + currency;
}
 
console.log(formatPrice(1250));
console.log(formatPrice(1250, { digits: 0 }));
console.log(formatPrice(19.9, { currency: '$' }));

function sell(product, qty) {
    product.stock -= qty;
}
sell(p1, 2);
console.log('после продажи осталось:', p1.stock);

