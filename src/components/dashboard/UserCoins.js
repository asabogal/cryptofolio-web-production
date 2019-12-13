import React, { Component } from 'react';
import axios from 'axios'
import UserCoin from '../coins/UserCoin'
import CoinGrid from '../coins/CoinGrid'

class UserCoins extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      userCoins: ''
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
        userCoins: response.data.coins
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

  render() {
    return (
      <div>
      {
        this.state.userCoins ? (
          <CoinGrid>
          {this.renderCoins(this.state.userCoins)}
        </CoinGrid>
        ) :
        null
      }
      </div>
    );
  }
}

export default UserCoins;