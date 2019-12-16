import React, { Component } from 'react';
import ReactHighCharts from 'react-highcharts'
import highchartsConfig from './HighChartsConfig'
import highchartsTheme from './HighChartsTheme'
import HighChartsTheme from './HighChartsTheme';

ReactHighCharts.Highcharts.setOptions(HighChartsTheme);

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div>
        <ReactHighCharts config={highchartsConfig()}/>
      </div>
    );
  }
}

export default Chart;