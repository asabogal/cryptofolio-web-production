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
    this.state.userCoins.length <= 2 ? (
      axios.get(url, config)
      .then((response) => {
        response.data.errors ? this.setState({
          errors: response.data.errors
        }) : 
        this.addCoin(response.data.coin.CoinInfo)
      })
      .then(() => console.log(this.state.userCoins))
    ) 
    :
    this.setState({
      errors: ['max number of coins reached']
    })
  }

  addCoin = (data) => {
    let coin = {
      symbol: data.Name,
      name: data.FullName,
      imageUrl: `https://www.cryptocompare.com${data.ImageUrl}`
    }
    this.setState({
      userCoins: this.state.userCoins.concat(coin)
    })
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

  renderCoins = (coins, top) => {
    console.log('passed coins', coins)
    return coins.map(coin => {
      return (
        <CoinCard 
        top={top}
        key={coin.symbol}
        symbol={coin.symbol}
        name={coin.name}
        image={coin.imageUrl}
        />
      )
    })
  }
    
  render() {
    return (
      <div>
        <h2>Select or search your favorite coins</h2>
        {this.renderCoins(this.state.userCoins, 'top')}
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