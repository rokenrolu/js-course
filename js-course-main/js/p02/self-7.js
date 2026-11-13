const CartModule = (function () {
    function createCart() {
        const items = [];
        return {
            add(item) { items.push({ name: item.name, price: item.price }); },
            remove(name) {
                const idx = items.findIndex((it) => it.name === name);
                if (idx !== -1) items.splice(idx, 1);
                return idx !== -1;
            },
            total() { return items.reduce((s, it) => s + it.price, 0); },
            items() { return items.map((it) => ({ ...it })); },
        };
    }
    // Наружу отдаём только фабрику
    return { createCart };
})();

const cart = CartModule.createCart();
cart.add({ name: 'Клавиатура', price: 1250 });
cart.add({ name: 'Мышь', price: 790 });
console.log('товаров:', cart.items().length, 'сумма:', cart.total()); // 2 2040

// В глобальной области видна только CartModule; createCart и внутренние
// детали скрыты, поэтому другой скрипт не перезапишет их случайно.
console.log(typeof window.createCart); // "undefined" в обычном скрипте