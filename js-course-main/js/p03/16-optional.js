const order = {
    id: 17,
    customer: { name: 'Анна', contacts: { email: 'anna@example.com' } },
};
const draft = { id: 18 };
 
console.log(order.customer?.contacts?.email);
console.log(draft.customer?.contacts?.email);
console.log(draft.customer?.contacts?.email ?? 'почта не указана');

// console.log(draft.customer.contacts.email);

const shop = { log(msg) { console.log('LOG:', msg); } };
const silentShop = {};
shop.log?.('заказ создан');
silentShop.log?.('не выведется');
 
const reviews = null;
console.log('первый отзыв:', reviews?.[0]?.author);
