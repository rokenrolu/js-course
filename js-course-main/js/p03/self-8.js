'use strict';

function deepFreeze(obj) {
    for (const value of Object.values(obj)) {
        if (typeof value === 'object' && value !== null) deepFreeze(value);
    }
    return Object.freeze(obj);
}

const state1 = deepFreeze({ cart: [], filters: {} });
console.log(Object.isFrozen(state1), Object.isFrozen(state1.cart), Object.isFrozen(state1.filters)); // true true true

function addToCart(state, item) {
    return deepFreeze({
        ...state,
        cart: [...state.cart, item],
    });
}

const state2 = addToCart(state1, { id: 1, name: 'Мышь', qty: 1 });
const state3 = addToCart(state2, { id: 2, name: 'Клавиатура', qty: 1 });

console.log(state1.cart.length); // 0 — старое состояние не тронуто
console.log(state2.cart.length); // 1
console.log(state3.cart.length); // 2
console.log(state1 === state2);  // false — новая ссылка
console.log(Object.isFrozen(state3.cart)); // true