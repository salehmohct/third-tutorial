let nums = document.querySelectorAll(".container .box .number");
let stats = document.querySelector(".stats");
let span = document.querySelectorAll(".the-progress span");
let div = document.querySelector(".our-skills");
let started = false; //متغير بنستخدمه لتشغيل الدالة في وقت محدد
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
    //200/goal علشان يعطيني معدل زيادة ثابت للارقام الثلاثة
  }, 2000 / goal);
}
window.onscroll = function () {
  span.forEach((span) => {
    if (window.scrollY >= div.offsetTop - 300) {
      span.style.width = span.dataset.width;
    }
  });
  if (window.scrollY >= stats.offsetTop - 500) {
    if (!started) {
      nums.forEach((element) => {
        startCount(element);
      });
    }
    started = true;
  }
};

let CountDown = new Date("Jan 29,2023 20:45:55").getTime();

let timer = setInterval(() => {
  let DateNow = new Date().getTime();
  let DateDiff = CountDown - DateNow;
  //get date
  let Day = Math.floor(DateDiff / (1000 * 60 * 60 * 24));
  document.querySelector(".time .unit .day").innerHTML =
    Day < 10 ? `0${Day}` : Day;
  let hours = Math.floor((DateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.querySelector(".time .unit .hour").innerHTML =
    hours < 10 ? `0${hours}` : hours;
  let min = Math.floor((DateDiff % (1000 * 60 * 60)) / (1000 * 60));
  document.querySelector(".time .unit .min").innerHTML =
    min < 10 ? `0${min}` : min;
  let sec = Math.floor((DateDiff % (1000 * 60)) / 1000);
  document.querySelector(".time .unit .sec").innerHTML =
    sec < 10 ? `0${sec}` : sec;
  if (DateDiff < 0) {
    clearInterval(timer);
  }
}, 1000);
