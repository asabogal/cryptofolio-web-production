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
        {
          this.props.loggedInStatus ? <h2>Logged In</h2> : <h2>Not Logged In</h2>
        }
       
      </div>
    );
  }
}

export default Dashboard;