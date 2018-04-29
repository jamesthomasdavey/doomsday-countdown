const daysEl = document.querySelector(`.countdown__days`);
const hoursEl = document.querySelector(`.countdown__hours`);
const minutesEl = document.querySelector(`.countdown__minutes`);
const secondsEl = document.querySelector(`.countdown__seconds`);
const millisecondsEl = document.querySelector(`.countdown__milliseconds`);

function timeBetween(startDate, endDate) {
  let milliseconds = endDate - startDate;
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  hours = hours - (days * 24);
  minutes = minutes - (hours * 60) - (days * 60 * 24);
  seconds = seconds - (minutes * 60) - (hours * 60 * 60) - (days * 60 * 60 * 24);
  milliseconds = milliseconds - (seconds * 1000) - (minutes * 1000 * 60) - (hours * 1000 * 60 * 60) - (days * 1000 * 60 * 60 * 24);
  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    milliseconds: milliseconds
  }
}

function countDown() {
  let coundDownInterval = setInterval(function() {
    let startDate = new Date();
    let endDate = new Date(`August 13, 2018 00:00:00`);
    if (endDate - startDate <= 0) {
      clearInterval(coundDownInterval);
      daysEl.innerHTML = `00`;
      hoursEl.innerHTML = `00`;
      minutesEl.innerHTML = `00`;
      secondsEl.innerHTML = `00`;
      millisecondsEl.innerHTML = `000`;
    } else {
      let myTimeBetween = timeBetween(startDate, endDate);
      daysEl.innerHTML = dd(myTimeBetween.days);
      hoursEl.innerHTML = dd(myTimeBetween.hours);
      minutesEl.innerHTML = dd(myTimeBetween.minutes);
      secondsEl.innerHTML = dd(myTimeBetween.seconds);
      millisecondsEl.innerHTML = td(myTimeBetween.milliseconds);
    }
  }, 1);
}

let dd = num => num.toString().length < 2 ? `0${num}` : num;
let td = num => {
  switch (num.toString().length) {
    case 1:
      return `00${num}`;
    case 2:
      return `0${num}`;
    case 3:
      return num;
  }
}

countDown();