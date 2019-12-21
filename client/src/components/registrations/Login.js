import React, { Component } from 'react';
import axios from 'axios'
import {FormContainer, ToSignup, ErrorsContainer} from './styled'
import {Link} from 'react-router-dom'
import {Button} from '../utils/Buttons'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      email: '',
      password: '',
      errors: ''
     };
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault()
    const {username, email, password} = this.state

    let user = {
      username: username,
      email: email,
      password: password
    }
    
    axios.post('/login', {user}, {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.props.handleLogin(response.data)
        this.handleAuth()
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => console.log('api errors:', error))
  };

  handleAuth = () => {
    this.props.history.push('/dashboard')
  }

  handleErrors = () => {
    return (
      <ErrorsContainer>
        <ul>
        {this.state.errors.map(error => {
        return <li style={{padding: '2px'}} key={error}>{error}</li>
          })
        }
        </ul>
      </ErrorsContainer>
    )
  }

  render() {
    const {username, email, password} = this.state
    return (
      <FormContainer>
        <h1 style={{textAlign: "center"}}>Log In</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <input
            placeholder="email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <input
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />

          <Button 
          type="submit"
          width='100%'
          height='35px'
          font='15px'
          >
            Log In
          </Button>

          <ToSignup>
            or <Link to='/signup' style={{color: '#7F97A4',}}>sign up</Link>
          </ToSignup>
          
          </form>

        <div>
          {
            this.state.errors ? this.handleErrors() : null
          }
        </div>
      </FormContainer>
    );
  }
}

export default Login;
