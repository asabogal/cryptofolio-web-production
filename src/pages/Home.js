import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div>
        <h1>HOME</h1>
        <h2>{this.props.loggedInStatus}</h2>
      </div>
    );
  }
}

export default Home;