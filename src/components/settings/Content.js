import React, { Component } from 'react';
import axios from 'axios'
import Form from './Form'
import CoinCard from '../coins/CoinCard'
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
      response.data.errors ? this.setState({
        errors: response.data.errors
      }) :
      this.addCoin(response.data.coin.CoinInfo)
    })
    .then(() => console.log(this.state.userCoins))
  }

  addCoin = (data) => {
    let coin = {
      symbol: data.Name,
      name: data.FullName,
      image: `https://www.cryptocompare.com${data.ImageUrl}`
    }
    this.setState({
      userCoins: this.state.userCoins.concat(coin)
    })
  }

  renderUserCoins = () => {
    const coins = this.state.userCoins
    return coins.map(coin => {
      return (
        <CoinCard 
        key={coin.symbol}
        symbol={coin.symbol}
        name={coin.name}
        image={coin.image}
        />
      )
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
    
  render() {
    return (
      <div>
        {this.renderUserCoins()}
        <Form updateState={this.updateState} getCoin={this.getCoin}/>
        <div>
          {
            this.state.errors ? this.handleErrors() : null
          }
        </div>
      </div>
    );
  }
}

export default Content;