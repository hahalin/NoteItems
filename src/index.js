import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter,Route } from 'react-router-dom';
import Welcome from './Components/Welcome';

ReactDOM.render(
    <BrowserRouter>
        <App>
            <Route path="/" component={Welcome} />
        </App>
    </BrowserRouter>,
    document.body);
//document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
