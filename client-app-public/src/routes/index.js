import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Store from '../pages/store';
// import About from '../pages/Auth';
import NotFound from '../pages/NotFound';
import Cart from "../pages/cart";
import ItemDetails from "../pages/itemDetails";
import OrderDetails from "../pages/orderDetails";

const Routes = () => {
  return (
    <Router>
      <Switch>
        {/* //<Route path="/about" component={About} /> */}
        <Route exact path="/" component={Store} />
        <Route path="/cart" component={Cart} />
        <Route path="/details/:itemId" component={ItemDetails} />
        <Route path="/orderDetails/:orderId" component={OrderDetails} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;