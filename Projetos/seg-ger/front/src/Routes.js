import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Login from './components/Login';

export class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/login" componen={Login}/>
                    <Route component={NotFound} />
                </Switch>
            </div>
        )
    }
};

export default Routes;