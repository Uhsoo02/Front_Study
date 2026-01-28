/**********************
 * 1. 상태 (State)
 **********************/
let items = [];
let count = 1;

/**********************
 * 2. DOM 선택
 **********************/
const addButton = document.getElementById("add-btn");
const container = document.getElementById("container");

/**********************
 * 3. 이벤트 처리
 **********************/
addButton.addEventListener("click", handleAddItem);

function handleAddItem() {
  // 상태 변경
  items.push(`아이템 ${count}`);
  count++;

  // 상태 변경 이후 UI 갱신
  render();
}

/**********************
 * 4. 렌더링 (UI)
 **********************/
function render() {
  // 기존 UI 초기화
  container.innerHTML = "";

  // 상태를 기준으로 UI 생성
  items.forEach((itemText) => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerText = itemText;

    container.appendChild(div);
  });
}
