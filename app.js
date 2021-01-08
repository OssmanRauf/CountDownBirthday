const year = new Date().getFullYear();
const countDownDate = new Date(`01/09/${year}`);
console.log(year);
setInterval(getTimeLeft, 1000);

function getTimeLeft() {
    const date = new Date().getTime();
    const timeLeft = countDownDate - date;
    const daysLeft = formatNumbers(Math.floor(timeLeft / (1000 * 3600 * 24)), 3);
    const hoursLeft = formatNumbers(Math.floor((timeLeft / (1000 * 60 * 60)) % 24), 2);
    const minutesLeft = formatNumbers(Math.floor((timeLeft / (1000 * 60)) % 60), 2);
    const secondsLeft = formatNumbers(Math.floor((timeLeft / 1000) % 60), 2);
    console.log(daysLeft, hoursLeft, minutesLeft, secondsLeft);
    const htmlDays = document.querySelector("#days").innerHTML = `${daysLeft} <span class='text-time'>Days</span>`;
    const htmlHours = (document.querySelector("#hours").innerHTML = `${hoursLeft} <span class='text-time'>Hours</span>`);
    const htmlMinutes = (document.querySelector("#minutes").innerHTML = `${minutesLeft} <span class='text-time'>Minutes</span>`);
    const htmlSeconds = (document.querySelector("#seconds").innerHTML = `${secondsLeft} <span class='text-time'>Seconds</span>`);
};


function formatNumbers(n, length) {
    let len = length - ('' + n).length;
    return (len > 0 ? new Array(++len).join('0') : '') + n;
};