import React, { Component } from 'react';
import ReactHighCharts from 'react-highcharts'
import highchartsConfig from './HighChartsConfig'
import highchartsTheme from './HighChartsTheme'

ReactHighCharts.Highcharts.setOptions(highchartsTheme);

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div>
        <ReactHighCharts config={highchartsConfig(this.props.historicalData)}/>
      </div>
    );
  }
}

export default Chart;