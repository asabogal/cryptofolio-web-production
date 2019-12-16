import React from 'react';
import {InfoCard} from './CoinCard'

const UserCoin = ({symbol, imageUrl, price, changeDay, changePct, mrktCap, supply, volume24Hr, dayHigh, dayLow, passSelectedCoin}) => {

  const clickHandler = () => {
    let coin = {
      symbol: symbol,
      price: price,
      imageUrl: imageUrl,
      changeDay: changeDay,
      changePct: changePct,
      mrktCap: mrktCap,
      supply: supply,
      volume24Hr: volume24Hr,
      dayHigh: dayHigh,
      dayLow: dayLow
    }
    passSelectedCoin(coin)
  }

  return (
    <InfoCard onClick={clickHandler} changePct={changePct}>
      <section>
        <div>{symbol} -- USD</div>
        <div>{changePct}%</div>
      </section>
      <div>
        <div className='card-price'>{price}</div>
      </div>
      <div>
       <div className='card-mktcap'><span>Mkt.Cap: </span>{mrktCap}</div>
      </div>
    </InfoCard>
  );
};

export default UserCoin;