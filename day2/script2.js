const msg = document.getElementById("msg");
const btnText = document.getElementById("btnText");
const btnColor = document.getElementById("btnColor");
const btnRandom = document.getElementById("btnRandom");
const btnFont = document.getElementById("btnFont");


btnText.addEventListener('click', function(){
    msg.textContent = "Hello, JS!";
});

btnColor.addEventListener('click', function(){
    msg.style.backgroundColor = "yellow";
});

btnRandom.addEventListener('mouseover', function(){
    const texts = ['안녕!', 'Hello!', 'JS 재미있다!', 'Good!'];
    const randomText = texts[Math.floor(Math.random()* texts.length)];

    msg.textContent = randomText;

    const colors = ['pink', 'skyblue', 'lime', 'orange'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    msg.style.backgroundColor = randomColor;

    const sizes = ["12px", "16px", "20px", "24px", "30px"];
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];

    msg.style.fontSize = randomSize;

});


btnFont.addEventListener('click', function(){
    const sizes = ["12px", "16px", "20px", "24px", "30px"];
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];

    msg.style.fontSize = randomSize;
});