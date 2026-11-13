const product = { name: 'Мышь', price: 790, discount: 0, note: undefined };
 
console.log('discount' in product, 'color' in product);
console.log(Object.hasOwn(product, 'note'), product.note !== undefined);
console.log('if (product.discount):', product.discount ? 'есть' : 'нет');

console.log(Object.keys(product));
console.log(Object.values(product));
console.log(Object.entries(product));
 
for (const [key, value] of Object.entries(product)) {
    console.log(`${key} = ${value}`);
}

const cart = {
    items: [],
    add(item) { this.items.push(item); },
    total() { return 0; },
};
for (const key in cart) {
    const kind = typeof cart[key] === 'function' ? 'метод' : 'свойство';
    console.log(key, '-', kind);
}

function diff(before, after) {
    const changed = [];
    for (const [key, value] of Object.entries(after)) {
        if (before[key] !== value) changed.push(key);
    }
    return changed;
}
console.log(diff({ name: 'Мышь', price: 790 }, { name: 'Мышь', price: 690, stock: 3 }));
