let productName = 'Клавиатура';
console.log(productName);
productName = 'Мышь';
console.log(productName);

let stock;
console.log('stock = ', stock);
stock = 12;
console.log('stock =', stock);

const VAT = 20;
console.log('НДС, %:', VAT);

const tags = ['usb', 'rgb'];
tags.push('wireless');
console.log(tags);

let price = 100;
let Price = 200;
let $total = 300;
let _count = 4;
let totalPriceWithDiscount = 0;
console.log(price, Price, $total, _count, totalPriceWithDiscount)

// console.log(discount);
// let discount = 15;

console.log('oldStyle до объявления:', oldStyle);
var oldStyle = 'var';
if (true) {
    var insideVar = 'видна снаружи блока';
    let insideLet = 'видна только в блоке';
}
console.log(insideVar);
console.log(typeof insideLet);
