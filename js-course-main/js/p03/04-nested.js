const product = {
    name: 'Клавиатура',
    price: 1250,
    dimensions: { width: 44, height: 3, depth: 13 },
    tags: ['usb', 'rgb'],
    reviews: [
        { author: 'Анна', rating: 5 },
        { author: 'Олег', rating: 4 },
    ],
};
 
console.log(product.dimensions.width);
console.log(product.tags[1]);
console.log(product.reviews[0].author);

product.tags.push('wireless');
product.reviews.push({ author: 'Ира', rating: 3 });
product.dimensions.width = 45;
 
let sum = 0;
for (const review of product.reviews) sum += review.rating;
console.log('тегов:', product.tags.length, 'средний рейтинг:', sum / product.reviews.length);

// console.log(product.supplier.name);
