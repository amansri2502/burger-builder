import React, { Component } from "react";
import Order from "../components/Order/Order";
import axios from "axios";
import withErrorHandler from "../hoc/withErrorHandler";
import * as actions from "./../redux-store/orderAction";
import { connect } from "react-redux";
import Spinner from "../UI/Spinner/Spinner";

class Orders extends Component {
  // state = {
  //   order: [],
  //   loading: true,
  // };
  componentDidMount() {
    this.props.onFetchOrders();
    // axios
    //   .get("/orders.json")
    //   .then((res) => {
    //     const fetchedOrders = [];
    //     for (let key in res.data) {
    //       fetchedOrders.push({ ...res.data[key], id: key });
    //     }
    //     this.setState({
    //       loading: false,order:fetchedOrders
    //     });
    //   })
    //   .catch((res) => {
    //     this.setState({ loading: false });
    //   });
  }
  render() {
    let orders=<Spinner/>
    if(!this.props.loading)
    orders=this.props.orders.map((order) => {
      return (
        <Order
          key={order.id}
          ingredients={order.ingredient}
          price={+order.price}
        ></Order>
      );
    })
    return (
      <div>
        {orders}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders.orders,
    loading: state.orders.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: () => dispatch(actions.fetchOrders()),
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Orders, axios));
