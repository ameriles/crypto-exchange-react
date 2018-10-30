import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home.jsx';
import About from '../About/About.jsx';
import Details from '../../components/Coin/Details.jsx';

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/coins/:assetId" component={Details} />
        </Switch>
    </main>
);

export default Main;