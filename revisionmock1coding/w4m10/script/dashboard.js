let dashboard=JSON.parse(localStorage.getItem("book-list"))
//console.log(dashboard)


let totalBooks=document.getElementById("curr_book")
totalBooks.innerText=`No of Books: ${dashboard.length}`



    dashboard.map((ele)=>{
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
        col7=document.createElement("th")
        let btn1=document.createElement("button")
        btn1.innerText="Buy"
        btn1.addEventListener("click",function(){
            buyBook(ele)
        })
        col7.append(btn1)
        
        col8=document.createElement("th")
        let btn2=document.createElement("button")
        btn2.innerText="Add"
        
        btn2.addEventListener("click",function(){
            bookmark(ele)
        })
        col8.append(btn2)
        row.append(col1,col2,col3,col4,col5,col6,col7,col8)
        document.querySelector("#tbody").append(row)
        })






let buyArr=JSON.parse(localStorage.getItem("buy-list")) || []
function buyBook(ele){
   // console.log(ele)
    buyArr.push(ele)
    localStorage.setItem("buy-list",JSON.stringify(buyArr))
}

let bookmarkArr=JSON.parse(localStorage.getItem("bookmark-list")) || []
function bookmark(ele){
   // console.log(ele)
bookmarkArr.push(ele)
localStorage.setItem("bookmark-list",JSON.stringify(bookmarkArr))

}


function deleteItem(){
    var content = localStorage.getItem("book-list");
    for(let i=0;i<dashboard.length;i++){
        localStorage.removeItem(JSON.stringify(dashboard[i]));
        localStorage.removeItem(content);
    }
                  
}


// function sorted(){

//     let value = document.querySelector("#sort").value
//     console.log( value)
//     if(value == "h2l"){
//         dashboard.sort(function(a,b){
//             return b.cost - a.cost ; 
//         })
// show(dashboard)
//     }
//     if(value == "l2h"){
//         dashboard.sort(function(a,b){
//             return a.cost - b.cost ; 
//         })
//       show(dashboard)
//     }
    
// }

