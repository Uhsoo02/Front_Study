const btn = document.getElementById("btn");
const box = document.getElementById("box");

let isOpen = false;

btn.addEventListener('click', ()=>{
    isOpen = !isOpen;

    if(isOpen){
        box.style.display = "block";
        btn.textContent = "닫기";
    } else{
        box.style.display = "none";
        btn.textContent = "열기";
    }
});