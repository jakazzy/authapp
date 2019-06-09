import React, { Component} from 'react';
import Login from './auth/Login';
import Signup from './auth/Signup';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Logout from './Logout'


class App extends Component{
  
  render(){
    return(
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={ Login }/>
            <Route exact  path="/signup" component={ Signup }/>
            <Route path="/logout"  component={ Logout }/>
          </Switch>
        </div>
      </BrowserRouter>
      
    )
  }

}
export default App;
