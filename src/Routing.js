import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home'
import Page1 from './components/Page1'
import Page2 from './components/Page2'

function Routing() {
    return (
        <Router> 
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Page1/" component={Page1} />
                <Route path="/Page2/" component={Page2} />
            </Switch>
    </Router>
    )}
export default Routing;