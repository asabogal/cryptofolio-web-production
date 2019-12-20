import React, { Component } from 'react';
import Content from '../components/settings/Content'
import {PageWrapper} from './PageWrapper'

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <PageWrapper>
        <Content user={this.props.user} loggedInStatus={this.props.loggedInStatus} history={this.props.history}/>
      </PageWrapper>
    );
  }
}

export default Settings;