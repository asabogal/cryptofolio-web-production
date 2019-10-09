import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div>
        <h1>DASHBOARD</h1>
        <h2>{this.props.loggedInStatus}</h2>
      </div>
    );
  }
}

export default Dashboard;