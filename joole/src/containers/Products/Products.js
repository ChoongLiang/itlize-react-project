import React, { Component } from "react";
import { connect } from "react-redux";
import "./Products.css";

import Product from "../../components/Product/Product";
import Sidebar from "../../components/Sidebar/Sidebar";

class Products extends Component {
  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    console.log(" clicked");
    this.props.history.push("/" + this.props.active.name + "/");
  }

  render() {
    let productList = this.props.active.products.map(product => {
      return (
        <Product
          detail={product}
          key={product.id}
          clickHandler={this.clickHandler}
        />
      );
    });

    return (
      <div className="row new-bg">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9">
          <p className="font-weight-bold mt-2 mb-0 ml-4 text-secondary">
            <span className="active-breadcrum">
              Mechanical <span className="mx-2">></span>{" "}
            </span>
            {this.props.active.name}
          </p>
          <div className="flex-container">{productList}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.search.categories,
    active: state.search.active
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  null
)(Products);
