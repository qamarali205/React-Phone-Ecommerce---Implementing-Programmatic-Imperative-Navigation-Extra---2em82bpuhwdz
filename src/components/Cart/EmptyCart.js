import React from "react";

export default function EmptyCart() {
  return (
    <div className="container mt-5 empty-cart-msg">
      <div className="row empty-cart-msg">
        <div className="col-10 mx-auto text-center text-title text-capitalize empty-cart-msg">
          <h1 className="empty-cart-msg">your cart is currently empty</h1>
        </div>
      </div>
    </div>
  );
}