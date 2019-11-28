import React from 'react';
import ReactDOM from 'react-dom';
import Myrouter from "./router/router";
import "./static/css/font.css";
import "./static/css/iconfont.css";
import "./static/css/common.less";

import { Provider }  from "react-redux";
import store from "./store/store.js";
 



import * as serviceWorker from './serviceWorker';
import { from } from '_array-flatten@2.1.2@array-flatten';

ReactDOM.render(<Provider store={store}>
    <Myrouter/>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
