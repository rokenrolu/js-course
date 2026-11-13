const product = {
    name: 'Клавиатура',
    price: 1250,
    'in stock': true,
};
 
console.log(product.name, product['price'], product['in stock']);
 
const field = 'price';
console.log('через переменную:', product[field]);

product.stock = 12;        // добавить
product.price = 1190;      // изменить
delete product['in stock']; // удалить
console.log(product);
console.log('нет такого свойства:', product.color);

const name = 'Мышь';
const price = 790;
const mouse = {
    name,          // то же, что name: name
    price,
    describe() {   // то же, что describe: function () { … }
        return 'Товар: ' + mouse.name;
    },
};
console.log(mouse.describe());
 
const key = 'color';
const colored = { [key]: 'чёрный' }; // вычисляемое имя свойства
console.log(colored);
