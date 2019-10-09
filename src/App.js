import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'
import Signup from './components/registrations/Signup'
import Login from './components/registrations/Login'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loggedInStatus: 'NOT LOGGED IN',
      user: {}
     };
  }

  handleLogin = (data) => {
    this.setState({
      loggedInStatus: 'LOGGED IN',
      user: data.user
    })
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route 
              exact path='/' 
              render={props => (
              <Home {...props} loggedInStatus={this.state.loggedInStatus}/>
              )}
            />
            <Route 
              exact path='/dashboard' 
              render={props => (
              <Dashboard {...props} loggedInStatus={this.state.loggedInStatus}/>
              )}
            />
            <Route exact path='/settings' component={Settings}/>
            <Route 
              exact path='/signup' 
              render={props => (
              <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus}/>
              )}
            />
            <Route 
              exact path='/login' 
              render={props => (
              <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus}/>
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
