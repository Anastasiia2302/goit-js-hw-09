import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const btnStart = document.querySelector("[data-start]");
const daysEl = document.querySelector("[data-days]");
const hoursEl = document.querySelectorAll("[data-hours]")
const minutesEl = document.querySelectorAll("[data-minutes]");
const secondsEl = document.querySelectorAll("[data-seconds]")

btnStart.addEventListener('click', startTimer)

let timer;
btnStart.disabled = true;
let selectedDates;


  // конвертер для вывода даты
  function convertMs(ms) {
    
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

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(anyDates) {
      if(anyDates[0] <= new Date) {
        Notiflix.Notify.failure("Please choose a date in the future")
      return};

      selectedDates = anyDates[0];
      btnStart.removeAttribute('disabled');
      
      
    },
  };
  // Запускаем таймер (устанавливаем текущее время и время старта)
function addTimer () {
    const currentDate = new Date();
    const deltaDate = selectedDates[0] - currentDate;
  
    if (deltaDate < 0) {
      btnStart.disabled = false;
        return;
    }
}


  // ф-ция для 2х символов
function addLeadingZero({days, hours, minutes, seconds }) {
    return String({days, hours, minutes, seconds }).padStart(2,0);
}


// изменяем значение счетчика 

const {days, hours, minutes, seconds} = convertMs(selectedDates)
daysEl.textContent = days;
hoursEl.textContent = hours;
minutesEl.textContent = minutes;
secondsEl.textContent = seconds;






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