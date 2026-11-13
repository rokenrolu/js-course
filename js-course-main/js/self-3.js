const READ = 1, WRITE = 2, DELETE = 4, ADMIN = 8;

function describe(perms) {
    const list = [];
    if ((perms & READ) === READ) list.push('чтение');
    if ((perms & WRITE) === WRITE) list.push('запись');
    if ((perms & DELETE) === DELETE) list.push('удаление');
    if ((perms & ADMIN) === ADMIN) list.push('администрирование');
    return list.length ? list.join(', ') : 'нет прав';
}

console.log(describe(READ | WRITE));          // чтение, запись
console.log(describe(READ | DELETE));         // чтение, удаление
console.log(describe(READ | WRITE | DELETE | ADMIN)); // все