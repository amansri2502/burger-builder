import React, { Component } from "react";
import Button from "../UI/Buttons/Button";
import classes from "./ContactData.module.css";
import axios from "axios";
import Spinner from "../UI/Spinner/Spinner";
import {withRouter} from 'react-router-dom'

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };
  // after clicking the order button a request is sent and the page reloads so we loose the state to prevent this an event is passed to the handler and then this event is to be diabled over here
  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredient: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Aman",
        address: {
          steet: "reva",
          Pincode: "560064",
          country: "india",
        },
        email: "aman.sri@gmail.com",
        delivarymethod: "fastest",
      },
    };
    //Post request
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  };
  render() {
    let form = (
      <form>
        <input
          type="text"
          className={classes.Input}
          name="name"
          placeholder="Your Name"
        />
        <input
          type="text"
          className={classes.Input}
          name="email"
          placeholder="Mail"
        />
        <input
          type="text"
          className={classes.Input}
          name="street"
          placeholder="Street"
        />
        <input
          type="text"
          className={classes.Input}
          name="postalCode"
          placeholder="PostalCode"
        />
      </form>
    );
    if (this.state.loading === "true") {
      form =( <Spinner />);
    }
    return (
      <div className={classes.ContactData}>
        <h4> Enter your Contact Details</h4>
        {form}
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </div>
    );
  }
}
// using hoc way of passing the routing props becaouse of the way this page is router using render method insted of component 
export default withRouter (ContactData);
