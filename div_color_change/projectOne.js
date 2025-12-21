let button = document.querySelector(".btn");
let myDiv = document.querySelector(".my_div");

let colors = ["red", "green", "blue","black"]
let i = 0;
button.onclick = function(){
    myDiv.style.backgroundColor = colors[i]
    i++
    if(i == colors.length){
        i = 0;
    }
}