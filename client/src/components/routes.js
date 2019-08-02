import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

import BeerNew from "./beers/new";
import BeerIndex from "./beers/index";
import BeerShow from "./beers/show";
import BeerEdit from "./beers/edit";
import BeerDestroy from "./beers/destroy";
import Register from "./sessions/register";
import Login from "./sessions/login";
import Logout from "./sessions/logout";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/beers/new" component={BeerNew} />
      <Route exact path="/beers/:id" component={BeerShow} />
      <Route exact path="/beers/:id/edit" component={BeerEdit} />
      <Route exact path="/beers/:id/destroy" component={BeerDestroy} />
      <Route exact path="/beers" component={BeerIndex} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={Logout} />
    </Switch>
  );
}

export default Routes;