function createIdGenerator(prefix) {
    let n = 0;
    return {
        next: () => `${prefix}-${++n}`,
        reset: () => { n = 0; },
        current: () => n,
    };
}

const nextOrderId = createIdGenerator('ORD');
const nextUserId = createIdGenerator('USR');

console.log(nextOrderId.next(), nextOrderId.next(), nextUserId.next()); // ORD-1 ORD-2 USR-1

nextOrderId.reset();
console.log('after reset ORD:', nextOrderId.next()); // ORD-1
console.log('USR not affected:', nextUserId.next()); // USR-2

// Два генератора независимы: у каждого своё замыкание с собственной n.