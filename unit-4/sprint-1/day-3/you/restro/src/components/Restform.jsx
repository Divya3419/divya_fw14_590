import React from "react";

const Restform = () => {
  return (
    <div>
      <form>
        <h1>Add New Details for Restaurants</h1>
        <div>
          <label>Dish image</label>
          <input type="url" name="image" />
        </div>

        <div>
          <label>Name</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Category</label>
          <input type="text" name="category" />
        </div>
        <div>
          <label>Cost</label>
          <input type="text" name="cost" />
        </div>
        <div>
          <label>Payment</label>
          <input type="text" name="payment" />
        </div>
        <div>
          <label>Rating</label>
          <input type="text" name="rating" />
        </div>
        <div>
          <label>Votes</label>
          <input type="text" name="votes" />
        </div>
        <div>
          <label>Reviews</label>
          <input type="text" name="reviews" />
        </div>
      </form>
    </div>
  );
};

export default Restform;
