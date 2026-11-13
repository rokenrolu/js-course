var config = { currency: '₽' };
console.log('window.config:', window.config);

(function () {
    var secret = 'внутренняя переменная';
    console.log('внутри IIFE:', secret);
})();
 
console.log('снаружи:', typeof secret);

const PriceModule = (function () {
    const VAT = 20;                       // скрыто
    function round(x) { return Math.round(x * 100) / 100; }
    return {
        withVat: (p) => round(p * (1 + VAT / 100)),
    };
})();
 
console.log(PriceModule.withVat(999.99));
console.log(PriceModule.VAT, typeof round);

