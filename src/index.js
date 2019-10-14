import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Card, Col, Typography, Button, Icon } from 'antd';
import './index.css';
import CustomMenu from './Menu';
import Pic from './assets/960x0.jpg';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(( <App />
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
