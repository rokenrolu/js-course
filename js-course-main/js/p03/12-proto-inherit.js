const baseProduct = {
    currency: '₽',
    describe() { return `${this.name}: ${this.price} ${this.currency}`; },
    shippingCost() { return 300; },
};
 
const digitalProduct = Object.create(baseProduct);
digitalProduct.shippingCost = function () { return 0; };
 
const ebook = Object.create(digitalProduct);
baseProduct.currency = 'руб.';
console.log(ebook.describe());
 
for (const key in ebook) console.log('for…in видит:', key);

console.log(ebook.describe(), '| доставка:', ebook.shippingCost());
console.log(Object.keys(ebook));

