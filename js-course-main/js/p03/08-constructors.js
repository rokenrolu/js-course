'use strict';
 
function Product(name, price) {
    this.name = name;
    this.price = price;
}
 
const keyboard = new Product('Клавиатура', 1250);
const mouse = new Product('Мышь', 790);
console.log(keyboard);
console.log(mouse instanceof Product);

// const broken = Product('Коврик', 300);


