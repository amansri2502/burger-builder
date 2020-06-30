import React, { Component } from "react";
import Order from "../components/Order/Order";
import axios from "axios";
import withErrorHandler from "../hoc/withErrorHandler";

class Orders extends Component {
  state = {
    order: [],
    loading: true,
  };
  componentDidMount() {
    axios
      .get("/orders.json")
      .then((res) => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({ ...res.data[key], id: key });
        }
        this.setState({
          loading: false,order:fetchedOrders
        });
      })
      .catch((res) => {
        this.setState({ loading: false });
      });
  }
  render() {
    return (
      <div>

        {this.state.order.map(order=>{
            return <Order key={order.id} ingredients={order.ingredient} price={+order.price} ></Order>
        })}
      </div>
    );
  }
}
export default withErrorHandler(Orders,axios);
