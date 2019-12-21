import React, { Component } from 'react';
import axios from 'axios'
import UserCoin from '../coins/UserCoin'
import CoinGrid from '../coins/CoinGrid'
import {Loader} from '../utils/Loader'

class UserCoins extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      userCoins: '',
      loading: true,
      activeCoin: '',
      hasCoins: true
     };
  }

  componentDidMount() {
    this.getUserCoins(this.props.user)
  } 

  getUserCoins = (user) => {
    const userId = user.id
    const url = `/users/${userId}/user_coins`
    const config = {
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
        }
    }

    axios.get(url, config).then(response => {
      this.setState({
        userCoins: response.data.coins,
        loading: false
      })
    })
    .catch(errors => this.redirect())
  }

  redirect = () => {
    this.props.history.push('/settings')
  }

  passSelectedCoin = (coin) => {
    this.props.setSelectedCoin(coin)
    this.setState({
      activeCoin: coin
    })
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
          passSelectedCoin={this.passSelectedCoin}
          activeCoin={this.state.activeCoin}
        />
      )
    })
  }

  loadCoinContent = () => {
    return this.state.loading ? <Loader/> : 
    (
    <CoinGrid>
      {this.renderCoins(this.state.userCoins)}
    </CoinGrid>
    )
  }

  render() {
    return (
      <div>
        {this.loadCoinContent()}
      </div>
    );
  }
}

export default UserCoins;