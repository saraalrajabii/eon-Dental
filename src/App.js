import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GetStarted from './components/GetStarted';
import Email from './components/email';
import Select2 from './components/Select';





function App() {
  return (
    <Router >
    <Switch>

          <Route  path="/:lang" component={GetStarted} exact />
          <Route path='/:lang/email' component={Email}/> 
        </Switch>
    </Router>
  );
}

export default App;














//   const {pathname}  = useLocation()
// console.log(pathname)
  
//   const params = new URLSearchParams(pathname)

//   params.set("topic", "webdev");
//   console.log("params"  + params)


// import React from "react";
// import ReactDOM from "react-dom";
// import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";
// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }
// function QueryScreen() {
//   let query = useQuery();
//   return (
//     <div>
//       <div>
//         <h2>Accounts</h2>
//         <ul>
//           <li>
//             <Link to="/account?name=foo">Foo User</Link>
//           </li>
//           <li>
//             <Link to="/account?name=bar">Bar User</Link>
//           </li>
//           <li>
//             <Link to="/account?name=baz">Baz User</Link>
//           </li>
//         </ul>
//         <User name={query.get("name")} />
//       </div>
//     </div>
//   );
// }
// function App() {
//   return (
//     <Router>
//       <QueryScreen />
//     </Router>
//   );
// }
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);