const catalog = {
    name: 'Каталог',
    children: [
        { name: 'Компьютеры', children: [
            { name: 'Клавиатуры', children: [] },
            { name: 'Мыши', children: [] },
        ]},
        { name: 'Кабели', children: [] },
    ],
};

function findPath(node, name, path = []) {
    const currentPath = [...path, node.name];
    if (node.name === name) return currentPath.join(' / ');
    for (const child of node.children) {
        const found = findPath(child, name, currentPath);
        if (found) return found;
    }
    return null;
}

console.log(findPath(catalog, 'Мыши'));       // Каталог / Компьютеры / Мыши
console.log(findPath(catalog, 'Кабели'));     // Каталог / Кабели
console.log(findPath(catalog, 'Каталог'));    // Каталог
console.log(findPath(catalog, 'Ноутбуки'));   // null