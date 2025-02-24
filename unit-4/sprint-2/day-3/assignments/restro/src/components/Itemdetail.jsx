import  React from 'react';

export const Itemdetail=({ele})=>{
    return(
<>
<div>

    <img src={ele.image} alt="" />
</div>
<div>
<p>{ele.name}</p>
<p>{ele.categories}</p>
<p>{ele.price}</p>
<p>{ele.Payment_Method}</p>
</div>
<div>
    <p>{ele.rating}</p>
    <p>{ele.votes}</p>
    <p>{ele.reviews}</p>
</div>


</>
    )
}