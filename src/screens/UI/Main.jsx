import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home.jsx';
import About from '../About/About.jsx';

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
        </Switch>
    </main>
);

export default Main;