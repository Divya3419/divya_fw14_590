import React from "react";

const ShoeCard = ({category,image,name}) => {
  let shoeId = null;
  return (
    <div data-cy={`shoe-card-wrapper-${shoeId}`}>
      <div>
        <img data-cy="shoe-card-image" src={image} alt="" />
      </div>
      <div>
        <div data-cy="shoe-name">{name}</div>
        <div data-cy="shoe-category">{category}</div>
      </div>
    </div>
  );
};

export default ShoeCard;
