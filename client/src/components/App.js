import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Splash from "./pages/Splash";
import DetailRepository from "./pages/DetailRepository";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/view/:repositoryId">
          <DetailRepository />
        </Route>
        <Route exact path="/">
          <Splash />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
