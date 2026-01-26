const container = document.querySelector("#card-container");

const titleInput = document.querySelector("#title-input");
const descInput = document.querySelector("#desc-input");
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", () => {

    if (
        titleInput.value.trim() === "" ||
        descInput.value.trim() === ""
    ){
        return;
    }

    createCard(titleInput.value, descInput.value);

    titleInput.value = "";
    descInput.value = "";
});

const cards = [
    {title: "HTML", desc: "웹의 구조"},
    {title: "CSS", desc: "웹의 스타일"},
    {title: "JavaScript", desc: "웹의 동작"}
];

function createCard(titleText, descText){
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h3");
    title.textContent = titleText;

    const desc = document.createElement("p");
    desc.textContent = descText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "삭제";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", (e) =>{
        e.stopPropagation();
        card.remove();
    });

    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(deleteBtn);

    card.addEventListener("click", () => {
        card.classList.toggle("active");
    });

    container.appendChild(card);
};

cards.forEach((item) => {
    createCard(item.title, item.desc);
});