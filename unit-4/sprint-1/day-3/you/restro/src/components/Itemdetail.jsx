import React from "react";

export const Itemdetail = ({ ele }) => {
  return (
    <div>
      <div>
        <img src={ele.image} alt="Dish pic" />
      </div>
      <div>
        <p>Name : {ele.name}</p>
        <p>Category : {ele.categories}</p>
        <p> Cost : {ele.price} for One</p>
        <p> Accepts: {ele.Payment_Method} Payment Only</p>
      </div>
      <div>
        <p>Rating : {ele.rating}</p>
        <p>Votes : {ele.votes}</p>
        <p>Reviews : {ele.reviews}</p>
      </div>
    </div>
  );
};
