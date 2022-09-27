import React, { Component } from "react";
import "../Product.css";

class CardProduct extends Component {
  state = {
    order: 4,
  };

  handleCounterChange = (newValue) => {
    this.props.onCounterChange(newValue);
  };

  handlePlus = () => {
    this.setState(
      {
        order: this.state.order + 1,
      },
      () => {
        this.handleCounterChange(this.state.order);
      }
    );
    // console.log("plus: ", this);
  };

  handleMinus = () => {
    if (this.state.order > 1) {
      this.setState(
        {
          order: this.state.order - 1,
        },
        () => {
          this.handleCounterChange(this.state.order);
        }
      );
    }
    // console.log("minus: ", this);
  };

  render() {
    return (
      <div className="card">
        <div className="img-thumb-prod">
          <img
            src="https://s3-ap-southeast-1.amazonaws.com/etanee-images/product/au_0910_pack15.jpg"
            alt=""
          />
        </div>
        <p className="product-title">
          Ayam 0.8 - 0.9 Kg Potong 10 Bagian [1 Ekor ] Rp 34,000
        </p>
        <p className="product-price">Rp. 34.000</p>
        <div className="counter">
          <button className="minus" onClick={this.handleMinus}>
            -
          </button>
          <input type="text" value={this.state.order} />
          <button className="plus" onClick={this.handlePlus}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default CardProduct;
