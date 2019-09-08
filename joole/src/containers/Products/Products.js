import React, { Component } from "react";
import { connect } from "react-redux";
import "./Products.css";

import Product from "../../components/Product/Product";
import Sidebar from "../../components/Sidebar/Sidebar";

class Products extends Component {
  render() {
    let productList = this.props.active.products.map(product => {
      return (
        <Product
          detail={product}
          key={product.id}
          history={this.props.history}
          match={this.props.match}
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

export default connect(
  mapStateToProps,
  null
)(Products);
