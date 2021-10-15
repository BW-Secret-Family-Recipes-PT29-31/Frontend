import './App.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Signup from './components/Signup';

import { Route, Switch, Redirect } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div>
      <Header/>
      
      <Switch>
      <Route path="/home">
        <Homepage/>
        </Route>
        <Route path="/login">
        <Login/>
        </Route>
        <Route path="/signup">
        <Signup/>
        </Route>
        <Route path="/">
        <Redirect to="/home"/>
        </Route>
      </Switch>
      </div>
    </div>
  );
}

export default App;
