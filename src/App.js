import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import BoardUser from './components/BoardUser';
import BoardAdmin from './components/BoardAdmin';
import Login from './components/Login';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />

        <Switch>

          <Route path={["/", "/home"]} exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route patth="/user" exact component={BoardUser} />
          <Route path="/admin" exact component={BoardAdmin} />
        </Switch>

      </BrowserRouter>

    </React.Fragment>
  );
}

export default App;
