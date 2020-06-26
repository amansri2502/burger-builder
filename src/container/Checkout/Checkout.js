

import React,{Component} from 'react' ;
import CheckoutSummary from './../../components/CheckoutSummary/checkoutSummary';

class Checkout extends Component{

    state={
        ingredients:{
            salad:1,
            meat:1,
            cheese:0,
            bacon:0
        }
    }

    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}></CheckoutSummary>
            </div>
        )
    }
    
}

export default Checkout;