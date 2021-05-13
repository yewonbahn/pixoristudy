import React from "react";
import {BrowserRouter as Router,Redirect,Route,Switch} from "react-router-dom";
import Home from "../Routes/Home";
import Search from "../Routes/Search";
import Maker from "../Routes/Maker";
import Menubar from "./Menubar";
import Header from "./Header";
export default ()=>(
    <Router>
       <>
      <Header/>
      <Menubar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/maker" component={Maker} />
        <Route path="/search" component={Search} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
    </Router>
)