import React from "react";

const ShoeCard = (props) => {
  //console.log(props)
  const shoeId = null;
  return (
    <div data-cy={`shoe-card-wrapper-${shoeId}`}  >
      <img data-cy="shoe-card-image" src={props.ele.image} alt="shoe" />
      <div>
        <div data-cy="shoe-name">{props.ele.name}</div>
        <div>
          In Cart:
          <div data-cy="shoe-count">0</div>
          <button data-cy="increment-shoe-count-button">+</button>
          <button data-cy="decrement-shoe-count-button">-</button>
        </div>
      </div>
    </div>
  );
};

export default ShoeCard;
