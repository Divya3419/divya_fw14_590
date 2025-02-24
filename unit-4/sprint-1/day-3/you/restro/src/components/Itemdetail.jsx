import React from "react";

export const Itemdetail = ({ ele }) => {
  return (
    <div>
      <div>
        <img src={ele.image} alt="Dish pic" />
      </div>
      <div>
        <p>{ele.name}</p>
        <p>{ele.categories}</p>
        <p> Cost {ele.price} for One</p>
        <p> Accepts {ele.Payment_Method} Payment Only</p>
      </div>
      <div>
        <p>{ele.rating}</p>
        <p>{ele.votes}</p>
        <p>{ele.reviews}</p>
      </div>
    </div>
  );
};
