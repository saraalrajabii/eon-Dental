import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GetStarted from './components/GetStarted';



function App() {
  return (
    <Router className="containerRouter">
    <Route path="/" component={GetStarted}   /> 
    </Router>
  );
}

export default App;
