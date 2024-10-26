`use strict`

// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const datetimePicker = document.querySelector(`#datetime-picker`);
// console.log(datetimePicker);
const btnStart = document.querySelector("button[data-start]");
// console.log(btnStart);

const daysOutput = document.querySelector("span[data-days]");
const hoursOutput = document.querySelector("span[data-hours]");
const minutesOutput = document.querySelector("span[data-minutes]");
const secondsOutput = document.querySelector("span[data-seconds]");

let userSelectedDate = null;

let isActive = false;
let intervalId = null;

btnStart.style.display = 'none';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        userSelectedDate = selectedDates[0];
        if (options.defaultDate >= userSelectedDate) {
            iziToast.error({
                color: 'red',
                position: 'center',
                message: `Please choose a date in the future`,
            })
            btnStart.disabled = true;
        } else {
            btnStart.disabled = false;
            btnStart.style.display = 'inline';
      }
    // console.log(selectedDates[0]);
  },
};

flatpickr(datetimePicker, options)


function start() {
    if (isActive) {
        return;
    }

    isActive = true;
    btnStart.disabled = true;
    datetimePicker.disabled = true;
    
    intervalId = setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = userSelectedDate - currentTime;      
        const {days, hours, minutes, seconds} = convertMs(deltaTime);
        // console.log({days, hours, minutes, seconds});

        if (deltaTime <= 0) {
            clearInterval(intervalId);
            isActive = false;
            btnStart.disabled = true;
            datetimePicker.disabled = false;
            return;
        }
        
        daysOutput.textContent = pad(days);
        hoursOutput.textContent = pad(hours);
        minutesOutput.textContent = pad(minutes);
        secondsOutput.textContent = pad(seconds);
        
    }, 1000)
}

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

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function pad(value) {
    return String(value).padStart(2, "0")
}

btnStart.addEventListener("click", start)

