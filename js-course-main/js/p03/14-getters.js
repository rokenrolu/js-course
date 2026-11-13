const line = {
    price: 790,
    qty: 3,
    get total() {
        return this.price * this.qty;
    },
};
 
console.log('сумма:', line.total);
line.qty = 5;
console.log('сумма:', line.total);

function createLine(name, price) {
    let qty = 1;                       // скрыто в замыкании
    return {
        name,
        price,
        get qty() { return qty; },
        set qty(value) {
            if (!Number.isInteger(value) || value < 1) {
                throw new RangeError(`Некорректное количество: ${value}`);
            }
            qty = value;
        },
    };
}
 
const mouseLine = createLine('Мышь', 790);
mouseLine.qty = 4;
console.log('количество:', mouseLine.qty);

// mouseLine.qty = -2;
