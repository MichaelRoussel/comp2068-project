import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

import PhoneNew from "./phones/new";
import PhoneIndex from "./phones/index";
import PhoneShow from "./phones/show";
import PhoneEdit from "./phones/edit";
import PhoneDestroy from "./phones/destroy";

import MonitorNew from "./monitors/new";
import MonitorIndex from "./monitors/index";
import MonitorShow from "./monitors/show";
import MonitorEdit from "./monitors/edit";
import MonitorDestroy from "./monitors/destroy";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/phones/new" component={PhoneNew} />
      <Route exact path="/phones" component={PhoneIndex} />
      <Route exact path="/phones/:id" component={PhoneShow} />
      <Route exact path="/phones/:id/edit" component={PhoneEdit} />
      <Route exact path="/phones/:id/destroy" component={PhoneDestroy} />
      <Route exact path="/monitors/new" component={MonitorNew} />
      <Route exact path="/monitors" component={MonitorIndex} />
      <Route exact path="/monitors/:id" component={MonitorShow} />
      <Route exact path="/monitors/:id/edit" component={MonitorEdit} />
      <Route exact path="/monitors/:id/destroy" component={MonitorDestroy} />
    </Switch>
  );
}

export default Routes;
