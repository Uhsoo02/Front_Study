// 실습 미션 1
/*
products 배열을 돌면서
모든 상품 이름을 출력해보자.
*/

const products = [
    {name : "노트북", price : 1200000},
    {name : "마우스", price : 30000}
];

// 모든 상품 이름 출력
products.forEach(product => {
    console.log(product.name)
});

// 모든 상품 가격 출력
products.forEach(prices => {
    console.log(prices.price)
});


// 실습 미션 2
/*
products 배열에서
상품 가격만 담긴 배열을 만들어보자.
*/

const products2 = [
    {name : "노트북", price : 1200000},
    {name : "마우스", price : 30000}
];

const prices2 = products2.map(product2 => {
    return product2.price
});