// 예제 코드

const products = [
  { name: "노트북", price: 1200000 },
  { name: "마우스", price: 30000 },
  { name: "키보드", price: 80000 }
];

// 실습 문제 1
/*
products 배열에서
모든 상품 가격의 총합을 reduce로 구해보자.
*/

const totalPrice = products.reduce((sum, product) =>{
    return sum + product.price
}, 0);

console.log(totalPrice);

// 실습 문제 2
/*
products 배열에서
5만원 이상 상품 가격만 합산해보자.
(힌트: if 사용 가능)
*/

const totPrice = products.reduce((sum, product) => {
    if(product.price >= 50000){
        return sum + product.price
    }
    return sum;
}, 0);

console.log(totPrice);