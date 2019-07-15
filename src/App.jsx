import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart/";
import Default from "./components/Default";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Modal from "./components/Modal";
import Signup from "./components/Signup";
import Product from './components/Product/Product';
import Login from "./components/Login";
import { Provider } from "react-redux";
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
        <Switch>
          <Route exact path="/" component={BookList} />
          <Route path="/details" component={BookDetails} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/product" component={Product} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
      </Provider>
    );
  }
}

export default App;
