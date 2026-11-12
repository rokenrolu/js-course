const name = 'клавиатура';
const price = 7599;
const stock = 5;
const discountPercent = 15;
const inStock = stock > 0;

console.log('Название:', name, typeof name);
console.log('Цена:', price, typeof price);
console.log('На складе:', stock, typeof stock);
console.log('Скидка:', discountPercent, typeof discountPercent);
console.log('В наличии:', inStock, typeof inStock);

// если "в наличии" хранить отдельно, то легко получить противоречие сток = 0 , а инСток = тру вычисление из единственного источника истины (сток) исключает такие рассинхронизации