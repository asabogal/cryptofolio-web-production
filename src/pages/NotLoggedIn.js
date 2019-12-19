import React, { Component } from 'react';
import {PageWrapper} from './PageWrapper'
import {Link} from 'react-router-dom'
import {Button} from '../components/utils/Buttons'

class NotLoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      render: false
     };

     this.timer = setTimeout(this.enableRender, 250)
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  enableRender = () => {
    this.setState({render: true})
  }

  renderContent = () => {
    return (
      <PageWrapper>
        <h1>YOU MUST BE LOGGED IN TO ACCESS THIS PAGE</h1>
          <Link to= '/signup'> 
            <Button>Sign Up</Button>
          </Link>
          <Link to='/login'>
            <Button>Log In</Button>
          </Link>
      </PageWrapper>
    )
  }

  render() {
    if (!this.state.render) {
      return null
    }
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default NotLoggedIn;
 