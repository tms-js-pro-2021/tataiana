/* eslint-disable linebreak-style */
import React from 'react';
// eslint-disable-next-line object-curly-newline
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route>
          404 not found
          <Link to="/login">login</Link>
        </Route>
      </Switch>
    </Router>
  );
}
