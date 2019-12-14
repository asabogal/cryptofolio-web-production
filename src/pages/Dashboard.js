import React, { Component } from 'react';
import UserCoins from '../components/dashboard/UserCoins'
import InfoTable from '../components/dashboard/InfoTable';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      user: '',
      selectedCoin: ''
     };
  }

  componentDidMount() {
    this.setState({
      user: this.props.user
    })
  }

  setSelectedCoin = (coin) => {
    this.setState({
      selectedCoin: coin
    })
  }

  render() {
    return (
      <div>
        <h1>DASHBOARD</h1>  
        {
          this.state.user ? <UserCoins user={this.state.user} setSelectedCoin={this.setSelectedCoin}/> : null
        }
        <InfoTable selectedCoin={this.state.selectedCoin}/>
      </div>
    );
  }
}

export default Dashboard;