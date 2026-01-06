let button = document.querySelector(".btn");

button.addEventListener("click", randomBG);

function randomBG() {
  document.body.style.backgroundColor = "#" + Math.random().toString(16).slice(2, 8);
  button.style.backgroundColor = "#" + Math.random().toString(16).slice(2, 8);
  
// let color = Math.floor(Math.random()*300)
// document.body.style.backgroundColor = `#${color}`
// console.log(color)
}
