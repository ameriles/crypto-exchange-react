import React from 'react';
import ReactDOM from 'react-dom';
import App from './screens/App.jsx';
import { BrowserRouter } from 'react-router-dom';

import './scss/app.scss';

import 'jquery';
import 'bootstrap/dist/js/bootstrap';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);