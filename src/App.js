import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./Components/Navbar";
import Details from "./Details";
import EditUserDetails from "./EditUserDetails";
import UserList from "./UserList";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/UserList" exact component={UserList} />
          <Route path="/Details/:login" component={Details} />
          <Route path="/EditUserDetails/:login" component={EditUserDetails} />
        </Switch>
      </BrowserRouter>
    );
  }
}
