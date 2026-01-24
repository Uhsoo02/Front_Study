// 실습 예제 코드

const products = [
  { name: "노트북", price: 1200000 },
  { name: "마우스", price: 30000 },
  { name: "키보드", price: 80000 }
];

// 실습 문제 1
/*
products 배열에서
가격이 5만원 이상인 상품만 담긴 배열을 만들어보자.
*/

const expensive = products.filter(product => {
    return product.price >= 50000
});

console.log(expensive)


// 실습 문제 2
/*
products 배열에서
이름이 "키보드"인 상품을 찾아서 출력해보자.
*/


const keyboard = products.find(product => {
    return product.name === "키보드"
});

console.log(keyboard)

