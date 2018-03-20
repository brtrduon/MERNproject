import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import About from './components/views/about';
import Reserve from './components/views/reserve';
import Confirmation from './components/views/confirmation';
import Menu from './components/views/menu';
import Site from './components/views/site';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route exact path='/' component={App}>
        <Route path='/about' component={About} />
        <Route path='/reserve' component={Reserve} />
        <Route path='/confirmation' component={Confirmation} />
        <Route path='/menu' component={Menu} />
        <Route path='/location' component={Site} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
