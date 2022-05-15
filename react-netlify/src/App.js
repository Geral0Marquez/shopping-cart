import React from "react";
import {BrowserRouter as Router, Switch,Route, Link} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import  Contact from "./pages/Contact";
import Blog from "./pages/Blog";

function App() {
  return (
    <div className="App-header">
     <Router>
       <div>
         <Link className="App-Link" style={{margin:"0 10px"}} to="/">
           Home
         </Link>
         <Link className="App-Link" style={{margin:"0 10px"}} to="/">
           Blog
         </Link>
         <Link className="App-Link" style={{margin:"0 10px"}} to="/">
           Contact
         </Link>
       </div>
       <Switch>
         <Route path="/" exact>
           <Home/>
         </Route>
         <Route path="/blog" exact>
           <Blog/>
         </Route>
         <Route path="/contact" exact>
           <Contact/>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
