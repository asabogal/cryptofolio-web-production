import React, { Component } from 'react';
import UserCoins from '../components/dashboard/UserCoins'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      user: '',
     };
  }

  componentDidMount() {
    this.setState({
      user: this.props.user
    })
  }

  render() {
    return (
      <div>
        <h1>DASHBOARD</h1>  
        {
          this.state.user ? <UserCoins user={this.state.user}/> : null
        }
      </div>
    );
  }
}

export default Dashboard;