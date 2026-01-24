# Day 4 - JavaScript 배열 & 객체 심화 + 고차 함수(map / filter / reduce)

## 🖥️ 실행 화면 (코드만 진행해 실행 화면이 따로 존재 x)
배열과 객체로 구성된 상품 데이터(`products`)를 기반으로  
조건에 따라 데이터를 출력·변환·합산하는 **콘솔 중심 실습**을 진행했다.

- 상품 이름 출력
- 조건에 맞는 상품 필터링
- 가격 데이터 변환 및 합산
- 배열 메서드 체이닝 실습

(※ 콘솔 출력 기반 실습)

---

## 📅 학습 날짜
- 2026-01-24

---

## 🎯 학습 목표
- 배열과 객체가 결합된 데이터 구조 이해
- 객체 배열 접근 방식 숙달
- `forEach`, `map`, `filter`, `reduce` 역할과 차이 이해
- 배열 메서드 체이닝 사고 방식 익히기
- React에서 자주 사용되는 데이터 처리 흐름 사전 학습

---

## 📁 파일 구성
```
day4/
┣ day4-1.js
┣ day4-2.js
┣ day4-3.js
┣ day4-4.js
┣ day4-5.js
┣ day4-6.js
┗ README.md
```


---

## 📄 index.html 역할
- JavaScript 실습을 위한 기본 HTML 구조
- 콘솔 확인을 위한 최소한의 화면 구성
- `script.js` 파일 연결

---

## ⚙️ script.js 역할
- 객체 배열(`products`) 데이터 정의
- 배열 메서드를 활용한 데이터 처리 실습
- `forEach`, `map`, `filter`, `reduce` 사용
- 조건 처리 및 값 변환 로직 구현

---

## 💡 오늘 배운 핵심 개념

### 1️⃣ 객체 배열 구조 이해
```
js
const products = [
  { name: "노트북", price: 1200000 },
  { name: "마우스", price: 30000 },
  { name: "키보드", price: 80000 }
];
```
- 배열 안에 객체가 들어있는 구조
- products[0].name 형태로 접근


### 2️⃣ forEach – 배열 순회
```
products.forEach(product => {
  console.log(product.name);
});
```
- 배열의 각 요소를 하나씩 꺼내 사용
- 반환값 없음 (출력 / 처리용)


### 3️⃣ map – 배열 변환
```
const prices = products.map(product => product.price);
```
- 기존 배열을 기반으로 새로운 배열 생성
- 객체 → 숫자, 객체 → 문자열 등 형태 변환에 사용


### 4️⃣ filter – 조건 필터링
```
const expensive = products.filter(product => product.price >= 50000);
```
- 조건을 만족하는 요소만 남긴 새 배열 반환


### 5️⃣ reduce – 값 누적
```
const totalPrice = products.reduce((sum, product) => {
  return sum + product.price;
}, 0);
```
- 배열을 하나의 값으로 축약
- 합계, 평균, 누적 계산에 활용


### 6️⃣ 배열 메서드 체이닝
```
const totalPrice = products
  .map(product => product.price)
  .reduce((sum, price) => sum + price * 1.1, 0);
```
- 메서드 결과를 다음 메서드로 바로 연결
- filter → map → reduce 흐름 이해
- 데이터가 객체 → 숫자 → 최종 값으로 변하는 과정 학습


🧠 DAY 4에서 배운 내용 한 줄 요약

- 객체 배열을 기반으로 데이터를 **선별(filter)**하고, **변환(map)**하고, **축약(reduce)**하는 흐름을 이해하며, 프론트엔드 데이터 처리의 핵심 사고 방식을 익혔다.
- 만약 {} 이걸 쓴다면 return이 필요하다 {} 이게 없을 시 return 필요 x
```
forEach  → 실행용 (return 안 봄)
map      → 변환용 (return 필요)
filter   → 조건용 (return true/false)
reduce   → 누적용 (return 필수)
```