const year = new Date().getFullYear();
const date = new Date();
let birthdayDate = new Date(`01/09/${year}`);
const timeLeft = birthdayDate - date.getTime();
console.log(date.getDate(), timeLeft);
const condition = date.getDate() === birthdayDate.getDate() && date.getMonth() === birthdayDate.getMonth() && date.getFullYear() === birthdayDate.getFullYear();
console.log(condition, date.getDate(), birthdayDate.getDate());
if (condition) {
    showBithdayMsg()
} else if (timeLeft < 0) {
    birthdayDate = new Date(`01/09/${year+1}`);
    setInterval(getTimeLeft, 1000);
} else {
    setInterval(getTimeLeft, 1000);
};



function showBithdayMsg() {
    document.getElementById('to-my-msg').remove();
    document.getElementById('remove').classList.add('remove-body-back');
    document.getElementById("countdown").remove()
    console.log(document.getElementById("birthday-msg"));
    document.getElementById("birthday-msg").classList.add("show-items");
};


function getTimeLeft() {
    const date = new Date().getTime();
    const timeLeft = birthdayDate - date;
    const daysLeft = formatNumbers(Math.floor(timeLeft / (1000 * 3600 * 24)), 3);
    const hoursLeft = formatNumbers(Math.floor((timeLeft / (1000 * 60 * 60)) % 24), 2);
    const minutesLeft = formatNumbers(Math.floor((timeLeft / (1000 * 60)) % 60), 2);
    const secondsLeft = formatNumbers(Math.floor((timeLeft / 1000) % 60), 2);
    document.querySelector(".birthday-msg").classList.add("remove-items");
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