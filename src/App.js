import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import { Contacts } from './contacts/Contacts';
import { Todo } from './TodoModule/Todo';
import { HomePage } from './homePage/HomePage';
import { ErrorPage } from './errorPage/ErrorPage';


function App() {
  return (
      <Router>
          <Switch>
              <Route path='/' exact component={HomePage}/>
              <Route path='/contacts' component={Contacts}/>
              <Route path='/todo' component={Todo}/>
              <Route path='*' component={ErrorPage}/>
          </Switch>
      </Router>
  );
}

export default App;
