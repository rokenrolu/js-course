'use strict';

function Product(name, price) {
    this.name = name;
    this.price = price;
}
Product.prototype.withDiscount = function (percent) {
    return this.price - this.price * percent / 100;
};
Product.prototype.describe = function () {
    return `${this.name}: ${this.price} ₽`;
};

function PhysicalProduct(name, price, weight) {
    Product.call(this, name, price); // 1. свойства родителя
    this.weight = weight;
}
// 2. цепочка прототипов
PhysicalProduct.prototype = Object.create(Product.prototype);
PhysicalProduct.prototype.constructor = PhysicalProduct;
// 3. свой метод
PhysicalProduct.prototype.shippingCost = function () {
    return 300 + this.weight * 50;
};
PhysicalProduct.prototype.describe = function () {
    return Product.prototype.describe.call(this) + `, вес ${this.weight} кг`;
};

const book = new PhysicalProduct('Книга', 450, 1.2);
console.log(book.describe());
console.log('скидка 10%:', book.withDiscount(10));
console.log('доставка:', book.shippingCost());
console.log(book instanceof PhysicalProduct, book instanceof Product); // true true