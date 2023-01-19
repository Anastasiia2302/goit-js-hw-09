import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const btnStart = document.querySelector("[data-start]");
const timerEl = document.querySelector('.timer');
const field = document.querySelectorAll('.field')
let value = document.querySelectorAll('.value')

// Запускаем таймер (устанавливаем текущее время и время старта)

class Timer {
    constructor() {
        this.intervalId = null;
        this.isActive = false;}
    start() {
            if(this.isActive) {
                return };
    
            const startTime = Date.now();
            this.isActive = true;
    
            this.intervalId = setInterval(() => {
                const currentTime = Date.now();
                const deltaTime = currentTime - startTime;
                const time = convertMs(deltaTime);
                updateTimer(time);
                
                console.log(`${days}:${hours}:${minutes}:${seconds}`);
            }, 1000);
    
        }
    stop() {
            clearInterval(this.intervalId);
            this.isActive = false;
        }
}

   const timer = new Timer();
    
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

function updateTimer (){
    value.textContent 

}

btnStart.addEventListener('click', () => timer.start());

