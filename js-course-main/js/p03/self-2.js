'use strict';

const original = {
    name: 'Клавиатура',
    price: 1250,
    dimensions: { width: 44, height: 3 },
};

const copy1 = { ...original };
const copy2 = Object.assign({}, original);
const copy3 = structuredClone(original);

copy1.dimensions.width = 100;
console.log('после copy1:', original.dimensions.width); // 100 — оригинал изменился!

copy2.dimensions.width = 200;
console.log('после copy2:', original.dimensions.width); // 200 — снова изменился

copy3.dimensions.width = 300;
console.log('после copy3:', original.dimensions.width); // 200 — оригинал НЕ изменился
console.log('copy3:', copy3.dimensions.width);          // 300