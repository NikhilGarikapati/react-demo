import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import Demotable from './table';
import Contact from './contact/contact';
 
function App() {
  return (
<Router>
<div>
<nav>
<ul>
<li><Link to="/">Contact</Link></li>
{/* <li><Link to="/contact">Contact</Link></li> */}
</ul>
</nav>
 
        <Switch>
<Route path="/" component={Contact} />
{/* <Route path="/contact" component={Contact} /> */}
</Switch>
</div>
</Router>
  );
}
 
export default App;