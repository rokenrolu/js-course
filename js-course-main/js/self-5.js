function parsePrice(text) {
    const cleaned = String(text).replace(/[^\d,.-]/g, '').replace(',', '.');
    return Number(cleaned);   // Number('') === 0, поэтому пустое -> 0
}

console.log(parsePrice('1 250,50 ₽')); // 1250.5
console.log(parsePrice('990₽'));       // 990
console.log(parsePrice('abc'));        // NaN