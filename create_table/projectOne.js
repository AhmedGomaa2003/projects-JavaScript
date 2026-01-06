let button = document.querySelector(".btn");
let rows = document.getElementById("rows");
let columns = document.getElementById("cols");

button.addEventListener("click", createTable);

function createTable() {
  let body = document.body;
  let table = document.createElement("table");

  for (let i = 0; i < rows.value; i++) {
    let tr = document.createElement("tr");
    table.appendChild(tr);

    for (let j = 0; j < columns.value; j++) {
      let td = document.createElement("td");
      let text = document.createTextNode("item text");
      td.appendChild(text);
      tr.appendChild(td);
    }
  }

  body.appendChild(table);
  rows.value = "";
  columns.value = "";
}
