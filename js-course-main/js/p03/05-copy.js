const original = { name: 'Мышь', price: 790, dims: { width: 6 } };
const sameRef = original;
sameRef.price = 690;
console.log('original.price:', original.price, 'одна ссылка?', original === sameRef);

const copy1 = { ...original };
const copy2 = Object.assign({}, original);
copy1.price = 500;
copy1.dims.width = 99;
console.log('original:', original.price, original.dims.width);
console.log('copy2.dims === original.dims?', copy2.dims === original.dims);

const deep = structuredClone(original);
deep.dims.width = 1;
console.log('original.dims.width:', original.dims.width, 'deep.dims.width:', deep.dims.width);

const a = { name: 'Мышь', price: 790 };
const b = { name: 'Мышь', price: 790 };
console.log('a === b:', a === b);
console.log('a === a:', a === a);
 
function shallowEqual(x, y) {
    const kx = Object.keys(x), ky = Object.keys(y);
    if (kx.length !== ky.length) return false;
    for (const k of kx) if (x[k] !== y[k]) return false;
    return true;
}
console.log('shallowEqual(a, b):', shallowEqual(a, b));

