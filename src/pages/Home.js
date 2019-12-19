import React, { Component } from 'react';
import Content from '../components/home/Content'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  render() {
    return (
      <div>
        <Content loggedIn={this.props.loggedIn}/>
      </div>
    );
  }
}

export default Home;