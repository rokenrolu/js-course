'use strict';
 
const settings = Object.freeze({ currency: '₽', vat: 20, limits: { maxItems: 10 } });
console.log('заморожен?', Object.isFrozen(settings));

// settings.vat = 22;

settings.limits.maxItems = 999;
console.log('maxItems:', settings.limits.maxItems);

function deepFreeze(obj) {
    for (const value of Object.values(obj)) {
        if (typeof value === 'object' && value !== null) deepFreeze(value);
    }
    return Object.freeze(obj);
}
 
const config = deepFreeze({ shop: { name: 'Мини-магазин', tags: ['new'] } });
console.log(Object.isFrozen(config.shop), Object.isFrozen(config.shop.tags));

const sealed = Object.seal({ qty: 1 });
sealed.qty = 2;          // менять можно
console.log('sealed.qty:', sealed.qty, 'запечатан?', Object.isSealed(sealed));
 
const closed = Object.preventExtensions({ qty: 1 });
delete closed.qty;       // удалять можно
console.log('closed:', closed, 'расширяем?', Object.isExtensible(closed));

function updateState(state, patch) {
    return Object.freeze({ ...state, ...patch });
}
 
const state1 = Object.freeze({ items: 0, total: 0 });
const state2 = updateState(state1, { items: 1, total: 790 });
console.log(state1, state2, state1 === state2);


