import React, { useEffect } from 'react';


 const Products = () => {
    useEffect(()=>{
        getdata()
    },[])
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)"}} id="outer">
       
    </div>
  )

}
const getdata=async()=>{
try{
let res=await fetch('http://localhost:3000/products');

let data=await res.json();
console.log(data);
dataAppend(data);
}
catch(error){
    console.log(error);
}
}

const dataAppend=(data)=>{
    let outer=document.getElementById("outer")
    outer.innerHTML=""
data.map((ele)=>{
    let div=document.createElement('div');

    let img=document.createElement('img');

    img.src=ele.image;
    img.style.width="40%";

    let name=document.createElement('p');
    name.innerText=ele.title;

    let price=document.createElement('p');
    price.innerText=ele.price;

div.append(img,name,price);
outer.append(div);
})
}
export default Products