# Day 6 - 웹 페이지 동적 UI 구성 실습

## 🖥️ 실행 화면
JavaScript를 활용해 **상태(state)에 따라 UI가 변경되는 동적 화면**을 구현했다.  
버튼 클릭 이벤트를 통해 상태 값을 변경하고,  
해당 상태를 기준으로 **DOM 스타일과 텍스트를 제어**하는 실습을 진행했다.

- 버튼 클릭 시 박스 열기 / 닫기
- 상태 값(isOpen)에 따른 UI 분기 처리
- 버튼 텍스트 동적 변경
- CSS display 속성을 활용한 요소 숨김 / 표시

---

## 📅 학습 날짜
- 2026-01-27

---

## 🎯 학습 목표
- 동적 UI의 개념 이해
- 상태(state)를 기준으로 화면을 제어하는 흐름 이해
- JavaScript 이벤트 처리와 DOM 조작 흐름 학습
- CSS box model 기본 개념 이해
- HTML / CSS / JavaScript 역할 분리 감각 익히기

---

## 📁 파일 구성
```
day6/
┣ index.html
┣ script.js
┣ style.css
┣ test.html
┣ test.js
┣ test.css
┗ README.md
```


---

## 📄 index.html 역할
- 버튼과 박스 UI의 기본 구조 제공
- JavaScript 및 CSS 파일 연결
- **화면 구조만 담당**, 동작 로직 없음

---

## ⚙️ test.js 역할
- 상태 변수(isOpen) 정의
- 버튼 클릭 이벤트 처리
- 상태 변경 로직 구현
- 상태 값에 따른 UI 제어
- 버튼 텍스트 동적 변경

---

## 🎨 test.css 역할
- 박스 초기 상태 설정(display: none)
- margin / padding을 활용한 여백 조절
- border를 활용한 박스 UI 시각화
- JavaScript에서 제어하는 UI의 기본 스타일 정의

---

## 💡 오늘 배운 핵심 개념

### 1️⃣ 동적 UI와 상태(state)
- 동적 UI는 사용자 이벤트에 따라 화면이 변경되는 UI
- 상태(state)는 현재 화면의 상황을 나타내는 값
- UI는 상태 값을 기준으로 결정됨

```js
let isOpen = false;
```

### 2️⃣ 상태 변경을 통한 UI 제어
```js
isOpen = !isOpen;
```
- 클릭 이벤트 발생 시 상태 반전
- 상태 변화에 따라 화면 변경 로직 실행

### 3️⃣ display 속성을 활용한 UI 제어
```cs
display: none;
```
- 요소를 화면에서 완전히 숨김
- 공간을 차지하지 않음
- 토글 UI 구현에 적합한 방식

### 4️⃣ 조건문을 통한 화면 분기 처리
```js
if (isOpen) {
    box.style.display = "block";
} else {
    box.style.display = "none";
}
```
- 상태 값을 기준으로 UI 분기
- 이벤트가 아닌 상태 중심 사고 방식 학습

### 5️⃣ CSS box model 개념
```cs
margin-top: 10px;
padding: 10px;
border: 1px solid black;
```
- margin: 요소 바깥쪽 여백
- padding: 요소 안쪽 여백
- border: 요소의 경계 표시

### 🧠 Day 6에서 배운 내용 한 줄 요약
- 상태(state)를 기준으로 UI를 제어하며, 이벤트 → 상태 변경 → 화면 갱신으로 이어지는 동적 UI의 기본 흐름을 이해했다.

```cs
HTML  → 구조
CSS   → 스타일
JS    → 상태 관리 + UI 제어
```
- UI는 상태의 결과물이며,
- 이벤트는 상태를 변경하는 트리거 역할을 한다.