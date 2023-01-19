const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');


// вешаем слушателя на старт и стоп
btnStart.addEventListener('click', startBtnClick);
btnStop.addEventListener('click', stopBtnClick);



// ф-ция смены цвета фона
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    
  }

btnStop.disabled = true;
let color;

// создаем функцию интервала для старта и вешем фон на боди

function startBtnClick () {
    btnStop.disabled = false;
    btnStart.disabled = true;

    color = setInterval(() => {document.body.style.backgroundColor = `${getRandomHexColor()}`},1000);
    
}
// создаем функция для стоп
function stopBtnClick () {
    btnStop.disabled = true;
    btnStart.disabled = false;
    clearInterval(color)
}
