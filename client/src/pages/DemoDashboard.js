import React, { Component } from 'react';
import axios from 'axios'
import UserCoin from '../components/coins/UserCoin'
import CoinGrid from '../components/coins/CoinGrid'
import {Loader} from '../components/utils/Loader'
import InfoContainer from '../components/dashboard/InfoContainer'
import {PageWrapper} from './PageWrapper'
import {Link} from 'react-router-dom'

class DemoDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      demoCoins: '',
      selectedCoin: '',
      active: false,
      loading: true,
      chartRange: 'months',
      historicalData: '',
      errors: ''
     };
  }

  componentDidMount() {
    this.getDemoCoins()
  }

  getDemoCoins = () => {
    const url = `http://localhost:3001/democoins`
    const config = {
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
        }
    }

    axios.get(url, config).then(response => {
      this.setState({
        demoCoins: response.data.coins,
        loading: false
      })
    })
    .catch(errors => console.log('api errors',))
  }
  

  setSelectedCoin = (coin) => {
    this.setState({
      selectedCoin: coin,
      active: true,
      historicalData: null
    })
    this.getHistoricalData(coin.symbol, this.state.chartRange)
  }

  loadCoinContent = () => {
    return this.state.loading ? <Loader/> : 
    (
    <CoinGrid>
      {this.renderCoins(this.state.demoCoins)}
    </CoinGrid>
    )
  }

  renderCoins = (coins) => {
    return coins.map(coin => {
      return (
        <UserCoin
          key={coin.symbol}
          symbol={coin.symbol}
          imageUrl={coin.imageUrl}
          price={coin.price}
          changeDay={coin.changeDay}
          changePct={coin.changePct}
          mrktCap={coin.mrktCap}
          supply={coin.supply}
          volume24Hr={coin.volume24Hr}
          dayHigh={coin.dayHigh}
          dayLow={coin.dayLow}
          passSelectedCoin={this.setSelectedCoin}
          activeCoin={this.state.selectedCoin}
        />
      )
    })
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
        <div>
          <p>This is a demo dashboard. Please <Link style={{color: 'aqua'}} to="/signup">Sign Up</Link> to gain full functionality.</p>
          <p>Click the cards below to see cryptcurrency data...</p>
        </div>
        <div>
          {this.loadCoinContent()}
        </div>
        {
          this.state.active ? <InfoContainer selectedCoin={this.state.selectedCoin} chartData={this.chartData()} changeChartRange={this.changeChartRange}/> : null
        }
      </PageWrapper>
    );
  }
}

export default DemoDashboard;