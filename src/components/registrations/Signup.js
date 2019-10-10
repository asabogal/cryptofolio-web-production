import React, { Component } from 'react';
import axios from 'axios'

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

    axios.post('http://localhost:3001/users', {user}, {withCredentials: true})
    .then(response => {
      console.log(response)
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
    this.props.history.push('/dashboard') //redirect to dashboard
  }

  handleErrors = () => {
    return (
      <div style={styles.errors.container}>
        <ul>{this.state.errors.map((error) => {
          return <li style={{padding: '2px'}} key={error}>{error}</li>
        })}</ul> 
      </div>
    )
  }
  

  render() {
    const {username, email, password, password_confirmation} = this.state
    return (
      <div style={styles.form.container}>
        <h1 style={{textAlign: "center"}}>Sign Up</h1>
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

          <input style={styles.form.input}
            placeholder="password confirmation"
            type="text"
            name="password_confirmation"
            value={password_confirmation}
            onChange={this.handleChange}
          />
        
          <button 
            style={styles.form.button}
            placeholder="submit"
            type="submit"
          >
            Sign Up
          </button>
      
        </form>
        <div style={styles.errors.text}>
          {
            this.state.errors ? this.handleErrors() : null
          }
        </div>
      </div>
    );

  }
}

export default Signup;

const styles = {
  form: {
    container: {
      display: 'grid',
      justifyContent: 'center',
      alignContent: 'center',
      marginTop: '50px'
    },
    body: {
      width: '300px',
      display: 'grid',
      gridGap: '10px'
    },
    input: {
      border: '1px thin black',
      height: '20px',
      fontSize: '1rem',
      padding: '5px'
    },
    button: {
      height: '35px',
      backgroundColor: '#7F97A4',
      color: 'white',
      fontSize: '15px'
    },
    signup: {
      fontSize: '15px',
      textAlign: 'right',
      display: 'inline-block'
    }
  },
  errors: {
    container: {
      marginTop: '30px',
      display: 'grid',
      width: '300px',
      boder: '1px thin red',
      backgroundColor: '#FCF1F1'
    },
    text: {
      color: 'red'
    },
    button: {
      height: '25px',
      backgroundColor: '#80CCED',
      color: 'white',
      fontSize: '15px',
      alignSelf: 'center'
    }
  }
}