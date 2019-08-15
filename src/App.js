import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import HomePage from "./pages/home-page/home-page.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import "./App.css";
import SignInSignUpPage from "./pages/signin-signup-page/signin-signup-page.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUpPage} />
        <Route path="/signout" component={SignInSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
