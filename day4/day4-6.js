// 예제 코드

const products = [
  { name: "노트북", price: 1200000 },
  { name: "마우스", price: 30000 },
  { name: "키보드", price: 80000 }
];


// 실습 문제 1
/*
products 배열에서
가격이 5만원 이상인 상품들의
"이름만" 담긴 배열을 만들어보자.
*/

const names = products.filter(product => product.price >= 50000)
.map(product => product.name);



// 실습 문제 2
/*
products 배열에서
모든 상품 가격에 10% 세금을 적용한 뒤
총합을 구해보자.
*/


const totalPrice = products.map(product => product.price)
.reduce((sum, product) => sum + product * 1.1, 0);