import React, { Component } from 'react';
import axios from 'axios'
import Form from './Form'
import CoinCard from '../coins/CoinCard'
import CoinGrid from '../coins/CoinGrid'
import {ErrorsContainer} from '../registrations/styled'

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      userCoins: [],
      allCoins: [],
      errors: ''
     };
  }

  componentDidMount() {
    this.getAllCoins()
  }

  getCoin = (symbol) => {
    let url = `http://localhost:3001/coins/${symbol}`
    const config = {
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      }
    }
    axios.get(url, config)
    .then((response) => {
      if (response.data.errors) {
        this.setState({
            errors: response.data.errors
          })
      } else {
        const {Name, FullName, ImageUrl} = response.data.coin.CoinInfo
        const coin = {
          symbol: Name,
          name: FullName,
          imageUrl: `https://www.cryptocompare.com${ImageUrl}`
        }
        this.addCoin(coin)
      }
    })
  }

  addCoin = (coin) => {
    if (!this.isUserCoin(coin.symbol) && this.state.userCoins.length <= 3) {
      this.setState({
        userCoins: this.state.userCoins.concat(coin)
      })
    } else {
      this.setState({
        errors: ['max number of coins reached']
      })
    }
  }

  getAllCoins = () => {
    let url = 'http://localhost:3001/coins/'
    const config = {
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      }
  }

  axios.get(url, config)
  .then(response => {
    this.setState({
      allCoins: response.data.coins
    })
    })
  }

  removeCoin = (coin) => {
    const array = this.state.userCoins
    const result = array.filter(c => c.symbol !== coin.symbol)
    this.setState({
      userCoins: result
    })
  }

  handleErrors = () => {
    return (
      <ErrorsContainer>
        <ul>
        {this.state.errors.map(error => {
        return <li style={{padding: '2px'}} key={error}>{error}</li>
          })
        }
        </ul>
      </ErrorsContainer>
    )
  }

  isUserCoin = (symbol) => {
    const array = this.state.userCoins
    return array.some(c => c.symbol === symbol)
  }

  renderCoins = (coins, top) => {
    return coins.map(coin => {
      return (
        <CoinCard 
        top={top}
        key={coin.symbol}
        symbol={coin.symbol}
        name={coin.name}
        image={coin.imageUrl}
        addCoin={this.addCoin}
        removeCoin={this.removeCoin}
        isUserCoin={this.isUserCoin}
        />
      )
    })
  }
    
  render() {
    return (
      <div>
        <h2>Select or search your favorite coins</h2>
        <CoinGrid>
          {this.renderCoins(this.state.userCoins, 'top')}
        </CoinGrid>
        <Form getCoin={this.getCoin}/>
        <div>
          {
            this.state.errors ? this.handleErrors() : null
          }
        </div>
        <CoinGrid>
          {this.renderCoins(this.state.allCoins)}
        </CoinGrid>
      </div>
    );
  }
}

export default Content;