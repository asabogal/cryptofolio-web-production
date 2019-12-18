import React, { Component } from 'react';
import axios from 'axios'
import UserCoins from '../components/dashboard/UserCoins'
import InfoContainer from '../components/dashboard/InfoContainer'
import {PageWrapper} from './PageWrapper'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      user: '',
      selectedCoin: '',
      active: false,
      historicalData: ''
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
    this.getHistoricalData(coin.symbol)
  }

  getHistoricalData = (symbol, period="DIGITAL_CURRENCY_MONTHLY") => {
    const url = "http://localhost:3001/history"
    const params = {
      symbol: symbol,
      period: period
    }
    axios.get(url, {params})
    .then(response => {
      this.setState({
        historicalData: response.data
      })
    })
  }

  render() {
    return (
      <PageWrapper>
        {
          this.state.user ? <UserCoins user={this.state.user} setSelectedCoin={this.setSelectedCoin} isActive={this.state.active}/> : null
        }
        {
          this.state.active ? <InfoContainer selectedCoin={this.state.selectedCoin} historicalData={this.state.historicalData}/> : null
        }
      </PageWrapper>
    );
  }
}

export default Dashboard;