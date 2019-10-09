import React, { Component } from 'react';
import axios from 'axios'

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
    
    axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
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
      <ul>
        {this.state.errors.map(error => {
        return <li key={error}>{error}</li>
      })
      }</ul>
 
    )
  }

  render() {
    const {username, email, password} = this.state
    return (
      <div style={styles.container}>
        <h1 style={{textAlign: "center"}}>Login</h1>
        <form style={styles.form.body} onSubmit={this.handleSubmit}>
          <input style={styles.form.input}
            placeholder="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <input style={styles.form.input}
            placeholder="email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <input style={styles.form.input}
            placeholder="password"
            type="text"
            name="password"
            value={password}
            onChange={this.handleChange}
          />

          <input 
            style={styles.form.button}
            placeholder="submit"
            type="submit"
          />
      
        </form>

        <div style={styles.errors}>
          {
            this.state.errors ? this.handleErrors() : null
          }
        </div>
      </div>
    );
  }
}

export default Login;

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: '50px'
  },
  form: {
    body: {
      width: '500px',
      display: 'grid',
      gridGap: '10px'
    },
    input: {
      border: '1px solid black',
      height: '20px',
      fontSize: '1rem',
      padding: '5px'
    },
    button: {
      height: '30px',
      backgroundColor: '#337ab7',
      color: 'white',
      fontSize: '15px'
    }
  },
  errors: {
    width: '300px',
    color: 'red'
  }
}