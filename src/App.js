import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'
import Signup from './components/registrations/Signup'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/dashboard' component={Dashboard}/>
            <Route exact path='/settings' component={Settings}/>
            <Route exact path='/signup' component={Signup}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
