import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Layout from './components/hoc/Layout'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'
import Signup from './components/registrations/Signup'
import Login from './components/registrations/Login'
import DemoDashboard from './pages/DemoDashboard'
import ProtectedRoute from './ProtectedRoute'
import RedirectRoute from './RedirectRoute'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: ''
     };
  }
  componentDidMount() {
    this.loginStatus()
  }

  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response.data)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: ''
    })
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
            loggedInStatus={this.state.isLoggedIn}
          >
            <Switch>
              <Route 
                exact path='/' 
                render={props => (
                <Home {...props} handleLogout={this.handleLogout} loggedIn={this.state.isLoggedIn}/>
                )}
              />

              <ProtectedRoute 
                exact path='/dashboard' 
                component = {Dashboard}
                user={this.state.user} 
                loggedIn={this.state.isLoggedIn}
              />

              <Route 
                exact path='/demo' 
                render={props => (
                <DemoDashboard {...props}/>
                )}
              />

             <ProtectedRoute 
                exact path='/settings' 
                component = {Settings}
                user={this.state.user} 
                loggedIn={this.state.isLoggedIn}
              />
             
              <Route 
                exact path='/signup' 
                render={props => (
                <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
                )}
              />

              <Route 
                exact path='/login' 
                render={props => (
                <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
                )}
              />

              <RedirectRoute 
                path='*'
                component={Dashboard}
                loggedIn={this.state.isLoggedIn}
              />
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
