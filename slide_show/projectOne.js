var myimegs = document.getElementById("slideShow");
let imges = [
  "imegs/0.png",
  "imegs/ai.png",
  "imegs/download.webp",
  "imegs/Home (2).png",
  "imegs/Home.png",
  "imegs/الافتراضى.png",
  "imegs/شعار أنيق متجر دهان.png",
];

let i = 0;
//ivent
function slideShow() {

    myimegs.setAttribute("src", imges[i]);
    if(i == imges.length - 1){
        i = 0;
    }else{
        i++
    }

  setTimeout(function () {
    slideShow();
  }, 2000);
}
slideShow();
