import React, { Component } from "react";
import CheckoutSummary from "./../../components/CheckoutSummary/checkoutSummary";
import {Route} from 'react-router-dom'
import ContactData from "../ContactData"


class Checkout extends Component {
  state = {
    ingredients:null,
    totalPrice:0
  };
// component did mount is changed to component will mount as we want to get ingredients before sending it in child as props  
  componentWillMount() {
    let query = new URLSearchParams(this.props.location.search);
    const ingredient = {};
    let price=0;
    for (let param of query.entries()) {
      // ['salad','1']
      // adding plus sign changes it to number from string
      if(param[0]==='price'){
        price=param[1];
      }else{
        ingredient[param[0]] = +param[1];
      }
      
    }

    this.setState({ ingredients: ingredient ,totalPrice:price});
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };
  checkoutContinuedHandler = () => {
    this.props.history.replace("./checkout/contact-data");
    console.log(this.props.match.path +"/contact-data");
    
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Route path={this.props.match.path +"/contact-data"} render={()=><ContactData ingredients={this.state.ingredients} price={this.setState.totalPrice}/>}/>
      </div>
    );
  }
}

export default Checkout;
