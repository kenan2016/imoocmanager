import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Life from './pages/demo/Life';
import Admin from './admin';
import Router from './router';
//import Router from './pages/route_demo/router_demo3/router';

// import IRouter from './pages/route_demo/router_demo3/router';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
