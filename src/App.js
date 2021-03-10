import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GetStarted from './components/GetStarted';
import Email from './components/email';



function App() {
  return (
    <Router className="containerRouter">
    <Switch>
          <Route  path="/" component={GetStarted} exact />
          <Route path='/email/:id' component={Email}/>
        </Switch>
    </Router>
  );
}

export default App;
