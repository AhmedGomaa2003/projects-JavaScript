function clock() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let flag = "AM";

  if (hours == 0) {
    hours = 12;
  }
  if (hours > 12) {
    hours = hours - 12;
    flag = "BM";
  }

  document.querySelector(
    ".clock"
  ).innerHTML = `${hours} : ${minutes} : ${seconds} : ${flag}`;

  setTimeout(() => {
    clock()
  }, 1000);
}

clock();
