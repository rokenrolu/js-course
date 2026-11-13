function increaseNumber(n) {
    n = n + 1;
    console.log('внутри функции n =', n);
}
 
let qty = 1;
increaseNumber(qty);
console.log('снаружи qty =', qty);

function increaseQty(item) {
    item.qty = item.qty + 1;
}
 
const line = { name: 'Мышь', qty: 1 };
increaseQty(line);
console.log('после вызова:', line);

function replaceItem(item) {
    item = { name: 'Новый товар', qty: 99 };
}
 
replaceItem(line);
console.log('после replaceItem:', line);

const withIncreasedQty = (item) => ({ ...item, qty: item.qty + 1 });
 
const before = { name: 'Клавиатура', qty: 1 };
const after = withIncreasedQty(before);
console.log('before:', before);
console.log('after:', after);
console.log('это один объект?', before === after);

