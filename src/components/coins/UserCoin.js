import React from 'react';
import {InfoCard} from './CoinCard'

const UserCoin = ({symbol, price, changeDay, changePct, mrktCap}) => {
  return (
    <InfoCard changePct={changePct}>
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