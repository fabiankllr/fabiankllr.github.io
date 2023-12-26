const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;
const COLOR_CODES = {
    info: {
      color: "green"
    },
    warning: {
      color: "orange",
      threshold: WARNING_THRESHOLD
    },
    alert: {
      color: "red",
      threshold: ALERT_THRESHOLD
    }
};

// vars
let remainingPathColor = COLOR_CODES.info.color;
let timeLimit = 60;
let timePassed = 0;
let timeLeft = timeLimit;
let timerInterval = null;

document.getElementById("timer").innerHTML = `
<div class="base-timer">
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45" />
      <path
      id="base-timer-path-remaining"
      stroke-dasharray="283"
      class="base-timer__path-remaining ${remainingPathColor}"
      d="
        M 50, 50
        m -45, 0
        a 45,45 0 1,0 90,0
        a 45,45 0 1,0 -90,0
      "
    ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">
    ${formatTimeLeft(timeLeft)}
  </span>
</div>
`;

// start timer on click! & reset interval & timePassed & play sound when finished
startTimer();

function onTimesUp() {
    clearInterval(timerInterval);
}
  
function startTimer() {
  timerInterval = setInterval(() => {
    
    // The amount of time passed increments by one
    timePassed = timePassed += 1;
    timeLeft = timeLimit - timePassed;
    
    // The time left label is updated
    document.getElementById("base-timer-label").innerHTML = formatTimeLeft(timeLeft);
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
        onTimesUp();
      }
  }, 1000);
}

function formatTimeLeft(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
  
    return `${minutes}:${seconds}`;
}

function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / timeLimit;
    return rawTimeFraction - (1 / timeLimit) * (1 - rawTimeFraction);
}
      
// Update the dasharray value as time passes, starting with 283
function setCircleDasharray() {
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
      .getElementById("base-timer-path-remaining")
      .setAttribute("stroke-dasharray", circleDasharray);
}

function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES;
  
    if (timeLeft <= alert.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(warning.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(alert.color);
  
    } else if (timeLeft <= warning.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(info.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(warning.color);
    }
}