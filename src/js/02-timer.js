import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const btnStart = document.querySelector("[data-start]");
const timerEl = document.querySelector('.timer');
const field = document.querySelectorAll('.field')
let value = document.querySelectorAll('.value')

// Запускаем таймер (устанавливаем текущее время и время старта)
const timer = {
    start() {
        const startNow = Date.now();
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startNow;
            const { days, hours, minutes, seconds } = convertMs(deltaTime);
            console.log(`${days}:${hours}:${minutes}:${seconds}`);
        }, 1000);

    },
};
// timer.start();

// конвертер для вывода даты
function convertMs(ms) {
    
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    
    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }
//   ф-ция для 2х символов
function addLeadingZero(value) {
    return String(value).padStart(2,0);
}

// подключаем библиотеку пикер

flatpickr(("#datetime-picker"), {}
);


// const options = {
//     enableTime: true,
//     time_24hr: true,
//     defaultDate: new Date(),
//     minuteIncrement: 1,
//     onClose(selectedDates) {
//       console.log(selectedDates[0]);
//     },
//   };
//  обновляем таймер
function updateTimer ({days, hours, minutes, seconds }){
    value.textContent = `${days}:${hours}:${minutes}:${seconds}`;

}

btnStart.addEventListener('click', () => timer.start());

