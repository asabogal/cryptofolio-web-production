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
      chartRange: 'months',
      historicalData: '',
      errors: ''
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
      active: true,
      historicalData: null
    })
    this.getHistoricalData(coin.symbol, this.state.chartRange)
  }

  getHistoricalData = (symbol, period) => {
    const ranges = {
      days: "DIGITAL_CURRENCY_DAILY",
      weeks: "DIGITAL_CURRENCY_WEEKLY",
      months: "DIGITAL_CURRENCY_MONTHLY"
    }
    const url = "http://localhost:3001/history"
    const params = {
      symbol: symbol,
      period: ranges[period]
    }
    
    axios.get(url, {params})
    .then(response => {
      if (response.data.errors) {
        this.setState({
          errors: response.data.errors
        })
      } else {
        this.setState({
          historicalData: response.data
        })
      }
    })
  }

  changeChartRange = (value) => {
    this.setState({
      chartRange: value,
      historicalData: null
    }, this.getHistoricalData(this.state.selectedCoin.symbol, value))
  }

  chartData = () => {
    return this.state.errors ? this.state.errors : this.state.historicalData
  }

  render() {
    return (
      <PageWrapper>
        {
          this.state.user ? <UserCoins user={this.state.user} setSelectedCoin={this.setSelectedCoin} isActive={this.state.active} history={this.props.history}/> : null
        }
        {
          this.state.active ? <InfoContainer selectedCoin={this.state.selectedCoin} chartData={this.chartData()} changeChartRange={this.changeChartRange}/> : null
        }
      </PageWrapper>
    );
  }
}

export default Dashboard;