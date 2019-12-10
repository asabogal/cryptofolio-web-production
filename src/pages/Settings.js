import React, { Component } from 'react';
import Content from '../components/settings/Content'

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div>
        <Content user={this.props.user} loggedInStatus={this.props.loggedInStatus} history={this.props.history}/>
      </div>
    );
  }
}

export default Settings;