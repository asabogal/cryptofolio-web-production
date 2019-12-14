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
      loading: true
     };
  }

  componentDidMount() {
    this.getUserCoins(this.props.user)
  } 

  getUserCoins = (user) => {
    const userId = user.id
    const url = `http://localhost:3001/users/${userId}/user_coins`
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
  }


  renderCoins = (coins) => {
    return coins.map(coin => {
      return (
        <UserCoin
          key={coin.symbol}
          symbol={coin.symbol}
          price={coin.price}
          changeDay={coin.changeDay}
          changePct={coin.changePct}
          mrktCap={coin.mrktCap}
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