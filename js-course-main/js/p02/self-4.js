function createCart() {
    const items = [];

    return {
        add(item) {
            // item: { name, price }
            items.push({ name: item.name, price: item.price });
        },
        remove(name) {
            const idx = items.findIndex((it) => it.name === name);
            if (idx !== -1) items.splice(idx, 1);
            return idx !== -1;
        },
        total() {
            let sum = 0;
            for (const it of items) sum += it.price;
            return sum;
        },
        // Возвращаем копию массива И копии объектов, чтобы снаружи
        // нельзя было испортить внутреннее состояние.
        items() {
            return items.map((it) => ({ ...it }));
        },
    };
}

const cart = createCart();
cart.add({ name: 'Клавиатура', price: 1250 });
cart.add({ name: 'Мышь', price: 790 });
console.log('товаров:', cart.items().length, 'сумма:', cart.total()); // 2 2040

// Проверка защиты: портим возвращённую копию
const copy = cart.items();
copy.push({ name: 'Хакер', price: 0 });
copy[0].price = 1;
console.log('после порчи копии сумма:', cart.total()); // 2040 — не изменилась
console.log('реальный список:', cart.items());

console.log('remove Мышь:', cart.remove('Мышь')); // true
console.log('после удаления:', cart.items(), 'сумма:', cart.total()); // 1250