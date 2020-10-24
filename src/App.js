import React, { useState } from "react";

import { Switch, Route } from "react-router-dom";

import { HomePage, ProjectDetailsPage } from "./pages";
import { NavBarContext, SideBarContext } from "./contexts";

const App = () => {
  const [isHomePage, setIsHomePage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="App">
      <NavBarContext.Provider value={{ isHomePage, setIsHomePage }}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <SideBarContext.Provider value={{ isVisible, setIsVisible }}>
            <Route path="/projects" component={ProjectDetailsPage} />
          </SideBarContext.Provider>
        </Switch>
      </NavBarContext.Provider>
    </div>
  );
};

export default App;
