import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Products.css";

import Product from "./Product/Product";
import Sidebar from "../../components/Sidebar/Sidebar";

import * as actions from "../../store/actions/package";

class Products extends Component {
  state = {
    compareProducts: []
  };

  compare = (product, checked) => {
    let products = [...this.state.compareProducts];
    if (checked) {
      products.push(product);
    } else {
      for (let [index, p] of products.entries()) {
        if (p.id === product.id) {
          products.splice(index, 1);
          break;
        }
      }
    }
    this.setState({
      compareProducts: products
    });
    this.props.compare(products);
  };

  render() {
    let productList = this.props.active.products.map(product => {
      return (
        <Product
          detail={product}
          key={product.id}
          history={this.props.history}
          match={this.props.match}
          compare={this.compare}
        />
      );
    });

    let compareBtn;
    if (this.state.compareProducts.length > 1) {
      let path = this.props.match.url + "/compare";
      compareBtn = (
        <Link to={path} className="compare-btn">
          Compare
        </Link>
      );
    }

    return (
      <div className="new-bg">
        <div className="row">
          <div className="col-3 sidebar-outline pr-0">
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
        <div className="text-right px-5 pt-2 pb-4">{compareBtn}</div>
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
  return {
    compare: products => dispatch(actions.compare(products))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
