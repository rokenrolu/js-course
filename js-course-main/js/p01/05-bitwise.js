const bin = (n) => n.toString(2).padStart(4, '0');
console.log(5, '=', bin(5));
console.log(3, '=', bin(3));

console.log('5 & 3=', bin(5 & 3));
console.log('5 | 3=', bin(5 | 3));
console.log('5 ^ 3 =', bin(5 ^ 3));
console.log('~5= ', ~5);

console.log('3 << 2=', 3 << 2, bin(3 << 2));
console.log('12 >> 2 = ', 12>>2);


const READ = 1, WRITE = 2, DELETE = 4, ADMIN =8;
let perms = READ | WRITE;
const has = (p, flag) => (p & flag) === flag;
console.log('права:', bin(perms), 'может писать?' , has(perms, WRITE));

perms = perms | DELETE ;
console.log('добавили DELETE:', bin(perms));
perms = perms & ~WRITE;
console.log('сняли write:', bin(perms), 'может писть?', has(perms, WRITE));

