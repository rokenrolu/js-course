const shopName = 'Мини-магазин';   // глобальная
 
function printHeader() {
    const title = 'Каталог';      // локальная
    console.log(shopName, '|', title);
}
 
printHeader();

console.log(title);

const stock = 3;
if (stock > 0) {
    const message = 'есть в наличии';
    console.log('внутри блока:', message);
}
console.log('снаружи блока:', typeof message);

const discount = 5;
 
function vipPrice(price) {
    const discount = 20;          // затеняет внешнюю
    return price - price * discount / 100;
}
 
console.log('VIP-цена:', vipPrice(1000), 'внешняя скидка:', discount);

let visits = 0;
function registerVisit() {
    visits++;    // нет своей visits, меняется внешняя
}
registerVisit();
registerVisit();
console.log('визитов:', visits);

