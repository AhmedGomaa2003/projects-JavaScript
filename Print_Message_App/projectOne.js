

var inputEle = document.getElementById("input");
var buttonEle = document.getElementById("btn");
var msgEle = document.getElementById("msg");

//ivent
buttonEle.onclick = function(){
    if (inputEle.value != ''){

        var inputvalue = inputEle.value;
        
        msgEle.innerHTML = inputvalue;
    }
    //empty input
    inputEle.value = ''
}