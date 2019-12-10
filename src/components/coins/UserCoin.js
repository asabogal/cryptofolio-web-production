import React from 'react';
import {InfoCard} from './CoinCard'

const UserCoin = ({symbol, price, changeDay, changePct, mrktCap}) => {
  return (
    <InfoCard>
      <section>
        <div>{symbol}</div>
        <div>{changeDay}</div>
        <div>{changePct}</div>
      </section>
      <div>
        <div>{price}</div>
      </div>
      <div>
       <div>{mrktCap}</div>
      </div>
    </InfoCard>
  );
};

export default UserCoin;