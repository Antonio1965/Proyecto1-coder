import "./Sass/app.css";

import { useEffect } from "react";
import { NavBar } from "./components/General/Navbar";
import { Footer } from "./components/General/Footer";
// import { ItemList } from './components/ItemList/ItemList';
// import Item from "./components/ItemList/Item";
import { ItemListContainer } from "./components/ItemList/ItemListContainer";
// import { Loader } from "./Loader/Loader";
import { Error404 } from "./components/General/Error404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
import { Counter } from "./components/Counter/Counter";
import { Checkout } from "./components/CheckoutForm/Checkout";
// import { Cart } from "./components/Cart/Cart";
import { DataProvider } from "./Context";
import { Cart } from './components/Cart/Cart';
// import { Counter } from "./components/Counter/Counter";

export const App = () => {
  return (
    <>
      <DataProvider>
        <Router>
          <NavBar title="Drone.Co" />
          <Switch>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route path="/item/:id">
              <ItemDetailContainer />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route component={Error404} />
            {/* <Route path='/counter'>
            <Counter/>
          </Route> */}
          </Switch>
          <Footer autor="Copyright &copy; -Tsutsumi Jose Antonio - Junio 2021." />
        </Router>
      </DataProvider>
    </>
  );
};
