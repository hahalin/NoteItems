import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter,Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import Welcome from './Components/Welcome';
import Login from './Components/Login';
import Logout from './Components/Logout';
import MyNotes from './Components/MyNotes';

const store=createStore(
    reducers,
    {
        auth:{authenicated:localStorage.getItem('token')}
    },
    applyMiddleware(reduxThunk)
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route path="/" exact component={Welcome} />
                <Route path="/login" component={Login} /> 
                <Route path="/logout" component={Logout} /> 
                <Route path="/mynotes" component={MyNotes} />
            </App>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root'));
//document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
