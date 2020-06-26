import React from "react";

import { Component } from "react";
import Layout from "./components/layout/Layout";
import BurgerBuilder from "./container/BurgerBuilder/BurgerBuilder";
import Checkout from "./container/Checkout/Checkout";

class App extends Component {
  render() {
    return (
      <div>
        {/* Comment: the outer main layout that contains everything navigation bar and all  */}
        <Layout>
          <BurgerBuilder/>
          <Checkout></Checkout>
        </Layout>
      </div>
    );
  }
}

export default App;
