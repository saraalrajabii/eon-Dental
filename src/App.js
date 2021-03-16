import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GetStarted from "./components/GetStarted";
import Email from "./components/email";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:lang" component={GetStarted} exact />
        <Route path="/:lang/appointment-request" component={Email} />
      </Switch>
    </Router>
  );
}

export default App;









