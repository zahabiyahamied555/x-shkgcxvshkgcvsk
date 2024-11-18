import React from 'react';
import { BrowserRouter as Router, Route, Switch, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NextPage from './pages/NextPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/next" component={NextPage} />
        <Navigate to="/" />
      </Switch>
    </Router>
  );
}

export default App;

