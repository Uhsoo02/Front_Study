const msg = document.getElementById('msg');
const btnText = document.getElementById('btnText');
const btnColor = document.getElementById('btnColor');
const btnRandom = document.getElementById('btnRandom');

btnText.addEventListener('click', function(){
    msg.textContent = "Hello, JS!";
});

btnColor.addEventListener('click', function(){
    msg.style.backgroundColor = "yellow";
});

btnRandom.addEventListener('click', function(){
    const texts = ['안녕!', 'ㄹㅇㅋㅋ', 'FUCK'];
    const randomText = texts[Math.floor(Math.random() * texts.length)];
    msg.textContent = randomText;

    const colors = ['red', 'green', 'gray'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    msg.style.backgroundColor = randomColor;

});