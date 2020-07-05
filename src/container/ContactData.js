import React, { Component } from "react";
import Button from "../UI/Buttons/Button";
import classes from "./ContactData.module.css";
import axios from "axios";
import Spinner from "../UI/Spinner/Spinner";
import { withRouter } from "react-router-dom";
import Input from "../UI/Input/Input";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "YOUR NAME",
        },
        value: "",
      },
      steet: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "STREET",
        },
        value: "",
      },
      Pincode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "PINCODE",
        },
        value: "",
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "COUNTRY",
        },
        value: "",
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "E-MAIL",
        },
        value: "",
      },
      delivarymethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" },
          ],
        },
        value: "",
      },
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
    const formArray = [];
    for (let key in this.state.orderForm) {
      formArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }

    let form = (
      <form>
        {formArray.map((forArrayElem) => {
          return (
            <Input
              key={forArrayElem.id}
              elementType={forArrayElem.config.elementType}
              elementConfig={forArrayElem.config.elementConfig}
              value={forArrayElem.config.value}
            />
          );
        })}
      </form>
    );
    if (this.state.loading === "true") {
      form = <Spinner />;
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
export default withRouter(ContactData);
