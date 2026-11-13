const original = { name: 'Мышь', price: 790, dims: { width: 6 } };
const sameRef = original;
sameRef.price = 690;
console.log('original.price:', original.price, 'одна ссылка?', original === sameRef);

