const cards = [
    {title: "HTML", descrption: "Structure of web" },
    {title: "CSS", descrption: "Style and layout" },
    {title: "JavaScript", descrption: "Logic and interaction" }
];

const container = document.querySelector(".card-container");

cards.forEach((card) => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
    <h3>${card.title}</h3>
    <p>${card.descrption}</p>
    `;

    container.appendChild(div);
})