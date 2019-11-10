import React, { Component } from 'react';
import Content from '../components/home/Content'
import Header from '../components/header_footer/Header'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  render() {
    return (
      <div>
        <Header 
        handleLogin={this.props.handleLogin}
        handleLogout={this.props.handleLogout}
        loggedInStatus={this.props.loggedInStatus}
        />
        <Content/>
      </div>
    );
  }
}

export default Home;