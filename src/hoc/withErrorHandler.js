// it is second method of creating higherorder component generally used for error handling
// re-visit video 184 if not able to understand code
import React, { Component } from "react";
import Aux from "./Auxilary";
import Model from "../UI/Modal/Modal";

const withErrorHandler = (WrapperComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };

    componentWillMount() {
      
      this.request=axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      this.response=axios.interceptors.response.use(res=>res, (error) => {
        this.setState({ error: error });
      });
    
    }
    // as this hoc is used by all the components whereever needed so to prevent memory leak we un mount the interceptor when it's need get's over
    componentDidUnmount(){
      axios.interceptors.request.eject(this.request);
      axios.interceptors.request.eject(this.response);


    }
    errorConfirmedHandler=()=>{
        this.setState({error:null})
        
    }

    render() {
      return (
        <Aux>
          <Model show={this.state.error} clicked={this.errorConfirmedHandler}>{this.state.error?this.state.error.message:null}</Model>
          <WrapperComponent {...this.props} />
        </Aux>
      );
    }
  };
};
export default withErrorHandler;
