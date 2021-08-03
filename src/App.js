import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./Components/common/Navbar";
import UserDetails from "./Components/user/UserDetails";
import EditUserDetails from "./Components/user/EditUserDetails";
import Users from "./Components/user/Users";
import NoPageFound from "./Components/common/NoPageFound";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route
            path="/"
            exact component={Users}
          />
          <Route path="/Users" exact component={Users} />
          <Route path="/UserDetails/:login" component={UserDetails} />
          <Route path="/EditUserDetails/:login" component={EditUserDetails} />
          <Route path="*" component={NoPageFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}
