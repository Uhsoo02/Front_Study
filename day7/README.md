# Day 7 - 프론트엔드 구조 정리 & 복습

## 🖥️ 학습 개요
지금까지 학습한 **HTML / CSS / JavaScript 기반 프론트엔드 흐름을 정리하고**,  
React 학습에 들어가기 전 **상태 중심 UI 사고 방식**을 명확히 정리했다.

단순 기능 구현이 아니라  
👉 “왜 이런 구조가 되는가?”  
👉 “이 방식의 한계는 무엇인가?”  
를 중심으로 복습을 진행했다.

---

## 📅 학습 날짜
- 2026-01-28

---

## 🎯 학습 목표
- HTML / CSS / JavaScript 역할 명확히 구분
- 프론트엔드에서 상태(state)의 의미 이해
- 이벤트 → 상태 변경 → UI 갱신 흐름 정리
- Vanilla JavaScript 기반 UI 구조의 한계 인식
- React 학습을 위한 사고 방식 준비

---

## 📁 파일 구성
```
day7/
┣ index.html
┣ script.js
┗ README.md
```

## ⚙️ script.js 역할
- UI 상태(state) 정의
- 사용자 이벤트 처리
- 상태 변경 로직 구현
- 상태 기반 UI 렌더링 함수 정의
```js
let items = [];
```

## 💡 오늘 배운 핵심 개념

### 1️⃣ 프론트엔드 3요소 역할 정리
```txt
HTML → 구조 (무엇이 존재하는가)
CSS  → 표현 (어떻게 보이는가)
JS   → 상태 + 흐름 (어떻게 동작하는가)
```
- HTML은 화면의 뼈대
- CSS는 시각적 표현
- JavaScript는 상태와 UI 흐름을 제어

### 2️⃣ 상태(state)의 개념
- 상태란 현재 UI를 결정하는 데이터
- 화면은 상태 값에 따라 달라짐
- 이벤트는 상태를 변경하는 트리거 역할
```js
let count = 0;
```

### 3️⃣ 프론트엔드 기본 흐름 공식
```txt
이벤트 발생
 → 상태 변경
 → UI 다시 렌더링
```
```js
function increase() {
  count++;
  render();
}
```
- UI는 이벤트가 아닌 상태의 결과물
- 이 흐름이 React의 핵심 개념과 연결됨

### 4️⃣ render 함수의 역할
```js
function render() {
  container.innerHTML = "";
  items.forEach(item => {
    const div = document.createElement("div");
    div.innerText = item;
    container.appendChild(div);
  });
}
```
- 상태를 기반으로 화면을 처음부터 다시 그림
- render 함수는 결과만 책임
- 상태 변경 로직과 분리되어야 관리가 쉬워짐

### 5️⃣ Vanilla JavaScript UI 구조의 한계
실습을 통해 느낀 문제점:
- OM 직접 조작 코드 증가
- 상태가 많아질수록 흐름 추적 어려움
- render 타이밍을 개발자가 직접 관리
- 코드 규모 증가 시 유지보수 난이도 상승
👉 이러한 문제를 해결하기 위해 React 등장

## 🧪 실습 내용

### ✔ 실습 1 — 코드 구조 분석
- 기존 Day 5~6 코드 분석
- 상태 / 이벤트 / 렌더링 영역 구분
- 각 함수의 역할을 주석으로 명확히 정리
```js
// 상태
let items = [];

// 이벤트 처리
function handleAdd() {}

// 렌더링
function renderItems() {}
```

### ✔ 실습 2 — 구조 리팩토링
- 이벤트 로직과 UI 렌더링 분리
- 상태 변경 이후 render 호출 구조로 통일
- React 구조를 염두에 둔 코드 정리

### 🧠 오늘의 핵심 정리
- UI는 상태(state)의 결과물이다
- 이벤트는 상태를 변경하는 트리거이다
- 상태 → render 흐름이 프론트엔드의 본질이다
- avaScript 구조의 한계를 인식하며 React 필요성을 이해했다.

### 🔍 느낀 점
- JavaScript만으로 UI를 관리하는 구조가 점점 복잡해짐을 체감
- React가 단순 라이브러리가 아니라
UI 구조를 체계화한 도구라는 점을 이해하게 됨
- 다음 단계 학습에 대한 방향성이 명확해짐