import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/login/LoginForm'
import Register from './components/login/RegisterForm'
import HomePage from './components/homepage/HomePage'
import Repository from './components/repository/Repository'

export default function Routers() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Login/>
          </Route>
          <Route path='/register' exact>
            <Register/>
          </Route>
          <Route path='/homePage' exact>
            <HomePage/>
          </Route>
          <Route path='/repository/:id' exact>
            <Repository/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}