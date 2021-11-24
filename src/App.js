import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';

const App = () => (
  <Router>
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/details">Details</NavLink>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/details">
        <Details />
      </Route>
    </Switch>
  </Router>
);

export default App;
