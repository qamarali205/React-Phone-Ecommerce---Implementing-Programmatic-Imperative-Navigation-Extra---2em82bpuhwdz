import React, { Component } from "react";
import images from "../../images";
export default class CartItem extends Component {
  render() {
    const { id, title, img, price, total, count } = this.props.item;
    const { increment, decrement, removeItem } = this.props.value;

    return (
      <div className="row my-1 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
          <img
            src={images[img]}
            style={{ width: "5rem", heigth: "5rem" }}
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="col-10 mx-auto col-lg-2 ">
          <span className="d-lg-none">product :</span> {title}
        </div>
        <div className="col-10 mx-auto col-lg-2 ">
          <strong>
            <span className="d-lg-none">price :</span> ${price}
          </strong>
        </div>
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
          <div className="d-flex justify-content-center">
            <div>
              <button
                className="btn btn-black mx-1 quantity-control"
                onClick={() => {
                  return decrement(id);
                }}
              >
                -
              </button>
              <button className="btn btn-black mx-1 quantity-control">{count}</button>
              <button
                className="btn btn-black mx-1 quantity-control"
                onClick={() => {
                  return increment(id);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-2 remove">
          <div className=" cart-icon" onClick={() => removeItem(id)}>
            <i className="fas fa-trash" />
          </div>
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <strong>item total : ${total} </strong>
        </div>
      </div>
    );
  }
}
