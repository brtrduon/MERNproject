import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Root from './components/views/root';
import About from './components/views/about';
import Reserve from './components/views/reserve';
import Confirmation from './components/views/confirmation';
import Gallery from './components/views/gallery';
import Fullmenu from './components/views/fullmenu'
import Site from './components/views/site';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route exact path='/' component={App}>
        <Route path='/root' component={Root} />
        <Route path='/about' component={About} />
        <Route path='/reserve' component={Reserve} />
        <Route path='/confirmation' component={Confirmation} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/fullmenu' component={Fullmenu} />
        <Route path='/location' component={Site} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
