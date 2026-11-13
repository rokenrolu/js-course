// applyDiscount — три формы
// Function Declaration: удобна для основных, часто используемых функций,
// доступна до объявления (hoisting), читается как обычный глагол.
function applyDiscount(price, percent = 0) {
    return price - price * percent / 100;
}

// Function Expression: уместна, когда функция — значение переменной,
// передаётся как callback или создаётся условно.
const applyDiscountExpr = function (price, percent = 0) {
    return price - price * percent / 100;
};

// Стрелочная: короткая, без своего this/arguments, идеальна для callback
// и однострочных вычислений.
const applyDiscountArrow = (price, percent = 0) => price - price * percent / 100;

// withVat — три формы
function withVat(price, rate = 20) {
    return price + price * rate / 100;
}
const withVatExpr = function (price, rate = 20) {
    return price + price * rate / 100;
};
const withVatArrow = (price, rate = 20) => price + price * rate / 100;

// formatPrice — три формы. Возвращает строку вида "1 250,50 ₽"
function formatPrice(value) {
    const fixed = value.toFixed(2).replace('.', ',');
    // разделитель тысяч — неразрывный пробел
    return fixed.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₽';
}
const formatPriceExpr = function (value) {
    return value.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₽';
};
const formatPriceArrow = (value) =>
    value.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₽';

console.log('applyDiscount:', applyDiscount(1000, 15), applyDiscountExpr(1000, 15), applyDiscountArrow(1000, 15));
console.log('withVat:', withVat(1000), withVatExpr(1000), withVatArrow(1000));
console.log('formatPrice:', formatPrice(1250.5), formatPriceExpr(1250.5), formatPriceArrow(1250.5));