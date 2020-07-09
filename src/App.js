import React from "react";

import { Component } from "react";
import Layout from "./container/layout/Layout";
import BurgerBuilder from "./container/BurgerBuilder/BurgerBuilder";
import Checkout from "./container/Checkout/Checkout";
import Orders from "./container/Orders"
import { Route, Switch, } from "react-router-dom";

class App extends Component {
  render() {
    return (
      
        <div>
          {/* Comment: the outer main layout that contains everything navigation bar and all  */}
          <Layout>
            {/* switch is used to choose exactly one it is imported from react router dom  sequence matters here root route should be kept at bottom*/}
            <Switch>
              <Route path="/checkout" component={Checkout} />
              <Route path="/orders" component={Orders} />
              <Route path="/" component={BurgerBuilder} />
            </Switch>
          </Layout>
        </div>
  
    );
  }
}

export default App;
