// Вариант 1: switch
function statusSwitch(code) {
    switch (code) {
        case 0: return 'Новый';
        case 1: return 'Оплачен';
        case 2: return 'Отправлен';
        case 3: return 'Доставлен';
        case 4: return 'Отменён';
        default: return 'Неизвестный статус';
    }
}

// Вариант 2: цепочка тернарных операторов
function statusTernary(code) {
    return code === 0 ? 'Новый'
         : code === 1 ? 'Оплачен'
         : code === 2 ? 'Отправлен'
         : code === 3 ? 'Доставлен'
         : code === 4 ? 'Отменён'
         : 'Неизвестный статус';
}

// Вариант 3: словарь + ??
const STATUS_MAP = { 0: 'Новый', 1: 'Оплачен', 2: 'Отправлен', 3: 'Доставлен', 4: 'Отменён' };
function statusMap(code) {
    return STATUS_MAP[code] ?? 'Неизвестный статус';
}

console.log(statusSwitch(1), statusTernary(1), statusMap(1));
console.log(statusSwitch(9), statusTernary(9), statusMap(9));