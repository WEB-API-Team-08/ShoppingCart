import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Store from '../pages/store';
import NotFound from '../pages/NotFound';
import Cart from "../pages/cart";
import ItemDetails from "../pages/itemDetails";
import OrderDetails from "../pages/orderDetails";
import Orders from "../pages/orders";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Store} />
        <Route path="/cart" component={Cart} />
        <Route path="/details/:itemId" component={ItemDetails} />
        <Route path="/orders" component={Orders} />
        <Route path="/orderDetails/:orderId" component={OrderDetails} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;