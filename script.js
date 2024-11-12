
let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalId;
const timerDisplay = document.getElementById('timer-display');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');
function updateDisplay() {
  const displayHours = String(hours).padStart(2, '0');
  const displayMinutes = String(minutes).padStart(2, '0');
  const displaySeconds = String(seconds).padStart(2, '0');
  timerDisplay.textContent = `${displayHours}:${displayMinutes}:${displaySeconds}`;
         }
function startTimer() 
{
  if (!intervalId) {
    intervalId = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
          minutes = 0;
          hours++;
           }
       }
      updateDisplay();
            }, 1000);
               }
         }

function stopTimer() {
  clearInterval(intervalId);
  intervalId = null;
        }
function resetTimer() {
  stopTimer(); 
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay(); 
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);


updateDisplay();
