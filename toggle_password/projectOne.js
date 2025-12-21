let btn = document.querySelector("#btn");
let input = document.querySelector("#input");

btn.onclick = function () {
  if (btn.getAttribute("data-text") == "show") {
    input.setAttribute("type", "text");
    btn.setAttribute("data-text", "hide");
    btn.innerHTML = "Hide";
  } else {
    input.setAttribute("type", "password");
    btn.setAttribute("data-text", "show");
    btn.innerHTML = "Show";
  }
};
