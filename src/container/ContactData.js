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
        validation: {
          required: true,
        },
        valid: false,
        touched:false
      },
      steet: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "STREET",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched:false
      },

      Pincode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "PINCODE",
        },
        value: "",
        validation: {
          required: true,
          lengthi: 6,
        },
        valid: false,
        touched:false
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "COUNTRY",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched:false
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "E-MAIL",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched:false
      },
      delivarymethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" },
          ],
        },
        validation:{},
        value: "fastest",
        valid:true
      },
    },
    isFormValid:false,
    loading: false,
  };

  checkValidity = (value, rules) => {
    let isValid = true;
    if (rules.required) isValid = value.trim() !== "" && isValid;

    if (rules.lengthi) isValid = value.length === rules.lengthi && isValid;
    return isValid;
  };
  // after clicking the order button a request is sent and the page reloads so we loose the state to prevent this an event is passed to the handler and then this event is to be diabled over here
  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const formData = {};
    for (let formElementName in this.state.orderForm) {
      formData[formElementName] = this.state.orderForm[formElementName].value;
    }
    const order = {
      ingredient: this.props.ingredients,
      price: this.props.price,
      orderForm: formData,
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
  // to deepclone we use spread operator twice
  inputChangedHandler = (event, inputIdenfier) => {
    const updatedOrderForm = { ...this.state.orderForm };
    const updatedInputElem = { ...updatedOrderForm[inputIdenfier] };
    updatedInputElem.value = event.target.value;
    updatedInputElem.valid = this.checkValidity(
      updatedInputElem.value,
      updatedInputElem.validation
    
    );
    updatedInputElem.touched=true;
    updatedOrderForm[inputIdenfier] = updatedInputElem;
      let formState=true;
      for(let key in updatedOrderForm ){
        formState=updatedOrderForm[key].valid && formState;

      }
    this.setState({ orderForm: updatedOrderForm ,isFormValid:formState});
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
      <form onSubmit={this.orderHandler}>
        {formArray.map((forArrayElem) => {
          return (
            <Input
              key={forArrayElem.id}
              elementType={forArrayElem.config.elementType}
              elementConfig={forArrayElem.config.elementConfig}
              value={forArrayElem.config.value}
              changed={(event) =>
                this.inputChangedHandler(event, forArrayElem.id)
    
              }
              select={forArrayElem.config.validation}
              invalid={!forArrayElem.config.valid}
              touched={forArrayElem.config.touched}
            />
          );
        })}
        <Button btnType="Success" disabled={!this.state.isFormValid}>ORDER</Button>
      </form>
    );
    if (this.state.loading === "true") {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4> Enter your Contact Details</h4>
        {form}
      </div>
    );
  }
}
// using hoc way of passing the routing props becaouse of the way this page is router using render method insted of component
export default withRouter(ContactData);
