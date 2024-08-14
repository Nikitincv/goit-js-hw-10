import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

const btn = document.querySelector('[data-start]');
const input = document.querySelector('#datetime-picker');
const outputDays = document.querySelector('[data-days]');
const outputHours = document.querySelector('[data-hours]');
const outputMinutes = document.querySelector('[data-minutes]');
const outputSeconds = document.querySelector('[data-seconds]');


let userSelectedDate = null;
let timerId = null;

btn.addEventListener("click", startTimer)

function startTimer () {
    timerId = setInterval(updateTimer, 1000)
    btn.disabled = true;
    input.disabled = true;
}

function updateTimer () {
    const timeDif = userSelectedDate - new Date(); 
    if (timeDif <= 0) {
        clearInterval(timerId)
        input.disabled = false;
        return
        
    }
    const { days, hours, minutes, seconds } = convertMs(timeDif);
    outputDays.textContent = String(days).padStart(2, 0);
    outputHours.textContent = String(hours).padStart(2, 0);
    outputMinutes.textContent = String(minutes).padStart(2, 0);
    outputSeconds.textContent = String(seconds).padStart(2, 0);


}

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] <= new Date() ) {
            btn.disabled = true;
            return iziToast.error({position:"topRight", message:"Please choose a date in the future"})
        }
        btn.disabled = false;
        userSelectedDate = selectedDates[0];
      console.log(selectedDates[0]);
    },
  };

    flatpickr(input, options)

  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  
