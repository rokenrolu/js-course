// 1. Число — примитив, передаётся по значению (копируется)
function increaseNumber(n) {
    n = n + 1;
    console.log('внутри increaseNumber n =', n);
}
let qty = 1;
increaseNumber(qty);
console.log('снаружи qty =', qty); // 1 — не изменилось

// 2. Объект — передаётся копия ссылки, поля меняются
function increaseQty(item) {
    item.qty = item.qty + 1;
}
const line = { name: 'Мышь', qty: 1 };
increaseQty(line);
console.log('после increaseQty:', line); // { name: 'Мышь', qty: 2 }

// 3. Чистая версия: возвращает новый объект, исходный не меняется
const increaseQtyPure = (item) => ({ ...item, qty: item.qty + 1 });

const before = { name: 'Клавиатура', qty: 1 };
const after = increaseQtyPure(before);
console.log('before:', before); // qty: 1
console.log('after:', after);   // qty: 2
console.log('один объект?', before === after); // false