import React, { Component } from 'react';
import UserCoins from '../components/dashboard/UserCoins'
import InfoContainer from '../components/dashboard/InfoContainer'
import {PageWrapper} from './PageWrapper'

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
      <PageWrapper>
        {
          this.state.user ? <UserCoins user={this.state.user} setSelectedCoin={this.setSelectedCoin} isActive={this.state.active}/> : null
        }
        {
          this.state.active ? <InfoContainer selectedCoin={this.state.selectedCoin}/> : null
        }
      </PageWrapper>
    );
  }
}

export default Dashboard;