// 1. Function Declaration — работает до объявления
console.log('decl:', decl(2, 3)); // 5
function decl(a, b) { return a + b; }

// 2. Function Expression через var
console.log('typeof varExpr:', typeof varExpr); // "undefined"
try {
    console.log(varExpr(2, 3));
} catch (e) {
    console.log('varExpr error:', e.name, '-', e.message); // TypeError: varExpr is not a function
}
var varExpr = function (a, b) { return a + b; };

// 3. Стрелочная функция через let
try {
    console.log(letArrow(2, 3));
} catch (e) {
    console.log('letArrow error:', e.name, '-', e.message); // ReferenceError: Cannot access 'letArrow' before initialization
}
let letArrow = (a, b) => a + b;
