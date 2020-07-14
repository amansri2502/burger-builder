import React, { Component } from "react";
import CheckoutSummary from "./../../components/CheckoutSummary/checkoutSummary";
import { Route, Redirect } from "react-router-dom";
import ContactData from "../ContactData";
import { connect } from "react-redux";


class Checkout extends Component {
 
  // state = {
  //   ingredients:null,
  //   totalPrice:0
  // };
  // component did mount is changed to component will mount as we want to get ingredients before sending it in child as props
  // componentWillMount() {
  //   let query = new URLSearchParams(this.props.location.search);
  //   const ingredient = {};
  //   let price=0;
  //   for (let param of query.entries()) {
  //     // ['salad','1']
  //     // adding plus sign changes it to number from string
  //     if(param[0]==='price'){
  //       price=param[1];
  //     }else{
  //       ingredient[param[0]] = +param[1];
  //     }

  //   }

  //   this.setState({ ingredients: ingredient ,totalPrice:price});
  // }

  // home route "/" by using goBack()
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };
  checkoutContinuedHandler = () => {
    this.props.history.replace("./checkout/contact-data");
  };

  render() {
    let summary = <Redirect to="/"></Redirect>;
    if (this.props.ingr) {
      const purchasedRedirect= this.props.purchased?<Redirect to='/'/>:null;
      summary = (
        <div>
          {purchasedRedirect}
          <CheckoutSummary
            ingredients={this.props.ingr}
            checkoutCancelled={this.checkoutCancelledHandler}
            checkoutContinued={this.checkoutContinuedHandler}
          />
          <Route
            path={this.props.match.path + "/contact-data"}
            // render={()=><ContactData ingredients={this.state.ingredients} price={this.state.totalPrice}/>}
            component={ContactData}
          />
        </div>
      );
    }
    return summary;
  }
}
// we don't have any state change action (dispatch action) from this componnent so we pass only one argument to connect
const mapStateToProps = (state) => {
  return {
    ingr: state.burgerBuilder.ingredient,
    price: state.burgerBuilder.totalPrice,
    purchased:state.orders.purchased
  };
};

export default connect(mapStateToProps)(Checkout);
