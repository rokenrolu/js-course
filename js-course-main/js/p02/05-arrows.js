// полная форма с телом
const applyDiscount = (price, percent) => {
    const discount = price * percent / 100;
    return price - discount;
};
 
// короткая форма: одно выражение, return не пишется
const double = (x) => x * 2;
 
// без параметров
const now = () => new Date().getFullYear();
 
console.log(applyDiscount(1000, 10), double(21), now());

const makeItemWrong = (name) => { name: name };
const makeItem = (name) => ({ name: name });
console.log(makeItemWrong('Мышь'));
console.log(makeItem('Мышь'));

function classic() {
    console.log('arguments.length =', arguments.length);
}
classic(1, 2, 3);

const arrow = () => console.log(arguments.length);
arrow(1, 2, 3);

function forEachPrice(prices, callback) {
    for (const p of prices) callback(p);
}
forEachPrice([1250, 790], (p) => console.log('цена с НДС:', p * 1.2));

