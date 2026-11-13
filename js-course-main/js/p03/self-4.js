'use strict';

function diff(before, after) {
    const changed = [];
    // изменённые и добавленные
    for (const [key, value] of Object.entries(after)) {
        if (before[key] !== value) changed.push(key);
    }
    // удалённые
    for (const key of Object.keys(before)) {
        if (!(key in after)) changed.push(key);
    }
    return changed;
}

const before = { name: 'Мышь', price: 790, stock: 5 };
const after  = { name: 'Мышь', price: 690, color: 'чёрный' };

console.log(diff(before, after)); // ['price', 'stock', 'color']