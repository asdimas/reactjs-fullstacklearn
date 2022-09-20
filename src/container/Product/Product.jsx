import React, { Component, Fragment } from "react";
import "./Product.css";
import CardProduct from "./CardProduct/CardProduct";
import CartImage from "../../assets/cart.png";

class Product extends Component {
  state = {
    order: 4,
  };

  handleCounterChange = (newValue) => {
    this.setState({
      order: newValue,
    });
  };

  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="logo">
            <img
              src="https://etanee.id/homescreenNew/favicon-32x32.png"
              alt=""
            />
          </div>
          <div className="troley">
            <img src={CartImage} alt="cart" />
            {/* <img src={process.env.PUBLIC_URL + "/cart.png"} alt="cart" /> */}

            <div className="count">{this.state.order}</div>
          </div>
        </div>
        <CardProduct
          onCounterChange={(value) => {
            this.handleCounterChange(value);
          }}
        />
      </Fragment>
    );
  }
}

export default Product;
