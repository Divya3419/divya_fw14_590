document.querySelector("#form").addEventListener("submit",bookDetails)

let bookArr=JSON.parse(localStorage.getItem("book-list")) || []
function bookDetails(e){
    e.preventDefault();
    
    let name=document.getElementById("bookname").value;
    let author=document.getElementById("author").value
    let bookdes=document.getElementById("bookdesc").value
    let adddate=document.getElementById("bookdate").value
    let cate=document.getElementById("bookcate").value
    let cost=document.getElementById("bookprice").value

    let bookObj={
        name,
        author,
        bookdes,
        adddate,
        cate,
        cost
    }
    bookArr.push(bookObj)
   console.log(bookArr)
    localStorage.setItem("book-list",JSON.stringify(bookArr))

}

