import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Page1 from "./components/Page1";
import Page2 from "./components/Page2";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/page1" component={Page1} />
        <Route exact path="/page2" component={Page2} />
      </Switch>
    </Router>
  );
}

export default App;
