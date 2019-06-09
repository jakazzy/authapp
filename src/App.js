import React, { Component} from 'react';
import Login from './auth/Login';
import { BrowserRouter } from 'react-router-dom';


class App extends Component{

  render(){
    return(
      <BrowserRouter>
        <div>
          <Login/>
        </div>
      </BrowserRouter>
      
    )
  }

}
export default App;
