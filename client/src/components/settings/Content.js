import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import Form from './Form'
import {CoinCard} from '../coins/CoinCard'
import CoinGrid from '../coins/CoinGrid'
import {ErrorsContainer} from '../registrations/styled'
import {Button} from '../utils/Buttons'
import {Loader} from '../utils/Loader'

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      userCoins: [],
      allCoins: [],
      errors: '',
      coinsAdded: false,
      loading: true
     };
  }

  componentDidMount() {
    this.getAllCoins()
  }

  getCoin = (symbol) => {
    let url = `/coins/${symbol}`
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
    let url = '/coins'
    const config = {
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      }
  }

  axios.get(url, config)
  .then(response => {
    this.setState({
      allCoins: response.data.coins,
      loading: false
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
    const user = this.props.user
    const coins = this.state.userCoins
    const url = 'http://localhost:3001/coins/'
    const payload = {
      user: user,
      coin: coins
    }
    const config = {
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      }
    }
    axios.post(url, payload, config)
    .then(() => this.redirect())
  }

  redirect = () => {
    this.props.history.push('/dashboard')
  }

  loadCoinContent = () => {
    return this.state.loading ? <Loader allCoins/> : 
      (
      <CoinGrid>
        {this.renderCoins(this.state.allCoins)}
      </CoinGrid>
      )
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
          {this.loadCoinContent()}
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