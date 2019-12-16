import React, { Component } from 'react';
import UserCoins from '../components/dashboard/UserCoins'
import InfoContainer from '../components/dashboard/InfoContainer';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      user: '',
      selectedCoin: '',
      active: false
     };
  }

  componentDidMount() {
    this.setState({
      user: this.props.user
    })
  }

  setSelectedCoin = (coin) => {
    this.setState({
      selectedCoin: coin,
      active: true
    })
  }

  render() {
    return (
      <div>
        {
          this.state.user ? <UserCoins user={this.state.user} setSelectedCoin={this.setSelectedCoin} isActive={this.state.active}/> : null
        }
        {
          this.state.active ? <InfoContainer selectedCoin={this.state.selectedCoin}/> : null
        }
      </div>
    );
  }
}

export default Dashboard;