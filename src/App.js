import React, { Component} from 'react'
import Login from './components/Login'
import Signup from './components/Signup'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Logout from './components/Logout'
import Dashboard from './components/Dashboard'
import Home from './components/Home'


class App extends Component{
  
  render(){
    return(
      <BrowserRouter>
        <div>
          <Switch>
          <Route exact path="/"  component={ Home }/>
            <Route exact path="/signin" component={ Login }/>
            <Route exact path="/signup" component={ Signup }/>
            <Route path="/dashboard"  component={ Dashboard }/>
            <Route path="/logout"  component={ Logout }/>
          </Switch>
        </div>
      </BrowserRouter>
      
    )
  }

}
export default App;
