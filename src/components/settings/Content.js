import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import Form from './Form'
import CoinCard from '../coins/CoinCard'
import CoinGrid from '../coins/CoinGrid'
import {ErrorsContainer} from '../registrations/styled'
import {Button} from '../utils/Buttons'

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      userCoins: [],
      allCoins: [],
      errors: '',
      coinsAdded: false
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
        userCoins: this.state.userCoins.concat(coin),
        coinsAdded: true
      })
      window.scroll(0, 0)
    } else {
      this.setState({
        errors: ['max number of user coins reached', 'please save current coins or remove and replace for another one']
      })
      window.scroll(0, 0)
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
    if (this.state.userCoins.length === 1) this.setState({coinsAdded: false})
    if (this.state.errors) this.setState({errors: ''})
  }

  handleErrors = () => {
    if (this.state.errors) {
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

  saveCoinsToApi = () => {
    const coins = this.state.userCoins
    const url = 'http://localhost:3001/coins/'
    const payload = {
     coin: coins
    }
    console.log(payload)
    const config = {
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      }
    }
    axios.post(url, payload, config)
    .then(response => console.log('response is', response))
  }
    
  render() {
    return (
      <div>
        <UserCoins coinsAdded={this.state.coinsAdded}>
          <h1>Your Coins</h1>
        </UserCoins>
        <CoinGrid>
          {this.renderCoins(this.state.userCoins, 'top')}
        </CoinGrid>
        <UserAction coinsAdded={this.state.coinsAdded}>
          <Button
          onClick={this.saveCoinsToApi}
            font='12px'
            width='250px'
            height='35px'
            >
              SAVE COINS
            </Button>
        </UserAction>

        <h2>Select or search your favorite coins (max 4):</h2>
        <Form getCoin={this.getCoin}/>
        <div>
          {
            this.handleErrors()
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

const UserCoins = styled.div`
  text-align: center;
  display: ${props => (props.coinsAdded ? 'block' : 'none')};
`;

const UserAction = styled.div`
  text-align: right;
  display: ${props => (props.coinsAdded ? 'block' : 'none')};
`;