// Write code related to Home Page
document.getElementById("form").addEventListener("submit", formFunction);

let data = JSON.parse(localStorage.getItem("Helpers")) || [];

function formFunction(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("phone").value;
  let category = document.getElementById("category").value;
  let type = document.getElementById("type").value;
  let objForm = {
    name,
    email,
    number,
    category,
    type,
  };
  data.push(objForm);
  localStorage.setItem("Helpers", JSON.stringify(data));
}
