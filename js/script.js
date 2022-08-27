const sadmoide = document.querySelector('.sadmoide');
const pipe = document.querySelector('.pipe');

const jump = () => {

    sadmoide.classList.add('jump');

    setTimeout(() => {
    sadmoide.classList.remove('jump');
    }, 500);

}

const loop = setInterval(() =>{

const pipePosition = pipe.offsetLeft;
const sadmoidePosition =  +window.getComputedStyle(sadmoide).bottom.replace('px', '');
if (pipePosition <= 220 && pipePosition > 0 && sadmoidePosition < 60) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    sadmoide.style.animation = 'none';
    sadmoide.style.bottom = `${sadmoidePosition}px`;
    sadmoide.style.width = '125px'

    sadmoide.src = './imagens/GameOver.png'

    clearInterval(loop);
}

}, 10);

document.addEventListener('keydown', jump);
 