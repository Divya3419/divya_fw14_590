// Write code related to Volatiers Page
let data = JSON.parse(localStorage.getItem("Helpers"));

function render(){
data.map((ele) => {
  if (ele.type === "Volantier") {
    let row = document.createElement("tr");
    let row1 = document.createElement("td");
    row1.innerHTML = ele.name;
    let row2 = document.createElement("td");
    row2.innerHTML = ele.email;
    let row3 = document.createElement("td");
    row3.innerHTML = ele.number;
    let row4 = document.createElement("td");
    row4.innerHTML = ele.category;
    let row5 = document.createElement("td");
    let btn = document.createElement("button");
    btn.setAttribute("id","btn")
    btn.innerText = "Delete";
    row5.append(btn);
    row.append(row1, row2, row3, row4, row5);
    document.getElementById("tbody").append(row);
  }
});
}

render();
