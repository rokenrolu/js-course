Product.prototype.withDiscount = function (percent) {
    return this.price - this.price * percent / 100;
};
 
console.log(keyboard.withDiscount(10), mouse.withDiscount(50));
console.log('метод общий?', keyboard.withDiscount === mouse.withDiscount);
console.log('собственное свойство?', Object.hasOwn(keyboard, 'withDiscount'));

const proto1 = Object.getPrototypeOf(keyboard);
const proto2 = Object.getPrototypeOf(proto1);
console.log(proto1 === Product.prototype);
console.log(proto2 === Object.prototype);
console.log(Object.getPrototypeOf(proto2));
console.log(keyboard.toString(), Object.hasOwn(keyboard, 'toString'));

mouse.withDiscount = function () { return 0; };
console.log(mouse.withDiscount(10), keyboard.withDiscount(10));
delete mouse.withDiscount;
console.log('после delete:', mouse.withDiscount(10));

// Array.prototype.last = function () { return this[this.length - 1]; };
// console.log([1, 2, 3].last());
