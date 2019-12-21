import React, { Component } from 'react';
import axios from 'axios'
import {FormContainer, ErrorsContainer} from './styled'
import {Button} from '../utils/Buttons'

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
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
    const {username, email, password, password_confirmation} = this.state
    let user = {
      username: username,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }

    axios.post('/users', {user}, {withCredentials: true})
    .then(response => {
      if (response.data.status === 'created') {
        this.props.handleLogin(response.data)
        this.handleAuth(response.data)
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => console.log('api errors:', error))
  };

  handleAuth = () => {
    this.props.history.push('/settings') //redirect to dashboard
  }

  handleErrors = () => {
    return (
      <ErrorsContainer>
        <ul>{this.state.errors.map((error) => {
          return <li style={{padding: '2px'}} key={error}>{error}</li>
        })}</ul> 
      </ErrorsContainer>
    )
  }
  

  render() {
    const {username, email, password, password_confirmation} = this.state
    return (
      <FormContainer>
        <h1 style={{textAlign: "center"}}>Sign Up</h1>
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

          <input
            placeholder="password confirmation"
            type="password"
            name="password_confirmation"
            value={password_confirmation}
            onChange={this.handleChange}
          />
        
          <Button 
          type="submit"
          width='100%'
          height='35px'
          font='15px'
          >
            Sign Up
          </Button>
      
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

export default Signup;
