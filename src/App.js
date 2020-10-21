import React from 'react';

import { Switch, Route } from "react-router-dom";

import {HomePage, ProjectDetailsPage} from './pages'


const  App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/projects" component={ProjectDetailsPage} />
      </Switch>

    </div>
  );
}

export default App;
