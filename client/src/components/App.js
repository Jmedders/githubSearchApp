import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Splash from "./pages/Splash";
import DetailRepository from "./pages/DetailRepository";
import NotFound from "./pages/NotFound";
import { SearchProvider } from "../context/search-context";

function App() {
  return (
    <Router>
      {/* wrap provider inside router in case 
			provider needs to utilize any react router functionality */}
      <SearchProvider>
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
      </SearchProvider>
    </Router>
  );
}

export default App;
