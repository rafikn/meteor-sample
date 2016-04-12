import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

// route components
import WhyBuy from './components/Layout.jsx';
import Main from './components/Main.jsx';
import Register from './components/Register.jsx';
import Help from './components/Help.jsx';
import NewItem from './components/NewItem.jsx';
import Browser from './components/Browser.jsx';
import NotFound from './components/NotFound.jsx';


export const renderRoutes = () => (
<Router history={browserHistory}>
  <Route path="/" component={WhyBuy} >
    <IndexRoute component={Main} />
    <Route path="/register" component={Register} />
    <Route path="/help" component={Help} />
    <Route path="/listItem" component={NewItem} />
    <Route path="/browse" component={Browser} />
    <Route path="*" component={NotFound} />

  </Route>
</Router>
);
