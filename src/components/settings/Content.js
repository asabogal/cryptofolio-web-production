import React, { Component } from 'react';
import Form from './Form'

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      userCoins: [],
      allCoins: []
     };
  }

  render() {
    return (
      <div>
        <Form/>
      </div>
    );
  }
}

export default Content;