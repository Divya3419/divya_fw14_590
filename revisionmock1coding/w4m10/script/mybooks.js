let myBooks=JSON.parse(localStorage.getItem("buy-list"))


myBooks.map((ele)=>{
let row=document.createElement("tr")

let col1=document.createElement("th")
col1.innerText=ele.name
let col2=document.createElement("th")
col2.innerText=ele.author
let col3=document.createElement("th")
col3.innerText=ele.bookdes
let col4=document.createElement("th")
col4.innerText=ele.adddate
let col5=document.createElement("th")
col5.innerText=ele.cate
let col6=document.createElement("th")
col6.innerText=ele.cost


row.append(col1,col2,col3,col4,col5,col6)
document.querySelector("#tbody").append(row)
})
