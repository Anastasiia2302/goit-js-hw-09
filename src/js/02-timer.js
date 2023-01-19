import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const btnStart = document.querySelector("[data-start]");
const daysEl = document.querySelector("[data-days]");
const hoursEl = document.querySelectorAll("[data-hours]")
const minutesEl = document.querySelectorAll("[data-minutes]");
const secondsEl = document.querySelectorAll("[data-seconds]")

btnStart.addEventListener('click', startTimer)

let timer = null;
btnStart.disabled = false;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if(selectedDates[0] <= new Date)
      {alert("Please choose a date in the future")}
      return;
    },
  };

  // конвертер для вывода даты
function convertMs(deltaDate) {
    
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    
    const days = addLeadingZero((Math.floor(ms / day)));
    const hours = addLeadingZero((Math.floor((ms % day) / hour)));
    const minutes = addLeadingZero((Math.floor(((ms % day) % hour) / minute)));
    const seconds = addLeadingZero((Math.floor((((ms % day) % hour) % minute) / second)));
  
    return { days, hours, minutes, seconds };
  }

//   ф-ция для 2х символов
function addLeadingZero(value) {
    return String(value).padStart(2,0);
}


// изменяем значение счетчика 


// daysEl.textContent = 
// hoursEl.textContent = 
// minutesEl.textContent = 
// secondsEl.textContent = 


// Запускаем таймер (устанавливаем текущее время и время старта)

btnStart.removeAttribute('disabled');

function addTimer () {
    const currentDate = new Date();
    const deltaDate = selectedDates[0] - currentDate;
    console.log(deltaDate);
    if (deltaDate <= 0) {
        btnStart.disabled = true;
        return
    }
}


// подключаем библиотеку пикер


flatpickr('#datetime-picker', {
    ...options,
  });

// таймер 
  function startTimer() {
    if (timer) {
      clearInterval(timer);
    }
    addTimer();
    timer = setInterval(addTimer, 1000);
  }