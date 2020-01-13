import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/layouts/Navbar';
import Registration from './components/Registration';
import Users from './components/Users';

//Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Registration} />
          <Switch>
            <Route exact path='/registration' component={Registration} />
            <Route exact path='/users' component={Users} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
