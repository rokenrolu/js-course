'use strict';
 
const productMethods = {
    describe() { return `${this.name}: ${this.price} ₽`; },
};
 
const cable = Object.create(productMethods);
cable.name = 'Кабель';
cable.price = 300;
console.log(cable.describe());
console.log(Object.getPrototypeOf(cable) === productMethods);
 
const dict = Object.create(null);
console.log('toString' in dict, 'toString' in {});

console.log(Object.getOwnPropertyDescriptor(cable, 'price'));

Object.defineProperty(cable, 'id', { value: 'SKU-001', writable: false, enumerable: true });
Object.defineProperty(cable, 'internalCode', { value: 42, enumerable: false });
 
console.log(cable.id, cable.internalCode);
console.log(Object.keys(cable));

// cable.id = 'SKU-999';
