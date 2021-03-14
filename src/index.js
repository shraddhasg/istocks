import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import Investments from './pages/Investments';
import Login from './pages/Login';
import Register from './pages/Register';
import StockDetails from './pages/StockDetails';
import Transactions from './pages/Transactions';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/stocks/:symbol" component={StockDetails} />
        <Route path="/my-investments" component={Investments} />
        <Route path="/transactions" component={Transactions} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
